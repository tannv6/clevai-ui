/* eslint-disable dot-notation */
import React, { useState } from 'react';
import { COLOR_ARRAY } from '../index';
import styles from './carousel.scss';
import colors from '../css/colors.scss';

interface Props {
  color?: typeof COLOR_ARRAY[number];
  children: any;
  infinit?: boolean;
  h?:
    | number
    | string
    | {
        xl?: number | string;
        md?: number | string;
        sm?: number | string;
      };
}

const Carousel = ({ color, children, infinit, h }: Props) => {
  const [sliderActive, setSliderActive] = useState(0);
  const iconNext = (
    <svg
      width={36}
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='36' height='36' rx='18' fill={colors['white']} />
      <path
        d='M15.5 23L20.5 18L15.5 13'
        stroke={colors[color || '']}
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
  const iconBack = (
    <svg
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='36' height='36' rx='18' fill={colors['white']} />
      <path
        d='M20.5 23L15.5 18L20.5 13'
        stroke={colors[color || '']}
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
  const handleNextStep = (isInfiniti?: boolean) => {
    if (sliderActive + 1 === children?.length) {
      isInfiniti && setSliderActive(0);
    } else {
      setTimeout(() => {
        setSliderActive(sliderActive + 1);
      }, 1);
    }
  };

  const handleBackStep = (isInfiniti?: boolean) => {
    if (sliderActive === 0) {
      isInfiniti && setSliderActive(children?.length - 1);
    } else {
      setSliderActive(sliderActive - 1);
    }
  };

  const isHolding = React.useRef(false);
  const [translate, setTranslate] = useState(0);
  const [clientX, setClientX] = useState<any>(null);

  useTransition(
    (clientXPrev: any) => {
      if (clientX && clientXPrev) {
        setTranslate(translate - (clientXPrev - clientX));
      }
    },
    [clientX]
  );

  const handleMouseMove = (e: any) => {
    if (isHolding.current) {
      setClientX(e.pageX);
    }
  };

  const handleTouchMove = (e: any) => {
    if (isHolding.current) {
      setClientX(e.touches[0].pageX);
    }
  };

  const handleMouseUp = () => {
    isHolding.current = false;
    if (translate > 100) {
      handleBackStep();
    } else if (translate < -100) {
      handleNextStep();
    }
    setTranslate(0);
    setClientX(null);
  };

  const handleMouseDown = () => {
    isHolding.current = true;
  };

  React.useEffect(() => {
    const handleWindowMouseUp = () => {
      handleMouseUp();
    };
    window.addEventListener('mouseup', handleWindowMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, []);

  return (
    <div
      className={`${styles['carousel__container']}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
      style={
        {
          '--hxl': genHeight('xl', h) || '100px',
          '--hmd': genHeight('md', h) || '100px',
          '--hsm': genHeight('sm', h) || '100px'
        } as any
      }
    >
      <div className={`${styles.carousel__sliders}`}>
        {React.Children?.map(children, (slide, index) => {
          return (
            <div
              key={index}
              className={`${styles['carousel__slider']}`}
              style={{
                left: `calc(${(index - sliderActive) * 100}% + ${translate}px)`,
                transition: isHolding.current ? 'unset' : undefined
              }}
            >
              {slide}
            </div>
          );
        })}
      </div>
      <div className={`${styles['carousel__dot__container']}`}>
        {React.Children?.map(children, (_slide, index) => {
          return (
            <div
              style={{
                backgroundColor:
                  index === sliderActive ? colors[color || ''] : '#8c9093'
              }}
              key={index}
              className={`${styles[`carousel__dot`]}`}
            />
          );
        })}
      </div>
      {(sliderActive < children?.length - 1 || infinit) && (
        <div
          className={`${styles['carousel__next']}`}
          onClick={() => handleNextStep(infinit)}
        >
          {iconNext}
        </div>
      )}
      {(sliderActive > 0 || infinit) && (
        <div
          className={`${styles['carousel__back']}`}
          onClick={() => handleBackStep(infinit)}
        >
          {iconBack}
        </div>
      )}
    </div>
  );
};

Carousel.defaultProps = {
  color: 'primary'
};

export default Carousel;

const useTransition = (callback: any, deps: any) => {
  const args = React.useRef();
  React.useEffect(() => {
    if (args && args.current !== null) {
      // eslint-disable-next-line standard/no-callback-literal
      callback(...(args.current || []));
    }
    args.current = deps;
  }, [...deps]);
};

const genHeight = (
  screenSize: 'xl' | 'md' | 'sm',
  height?:
    | number
    | string
    | {
        xl?: number | string;
        md?: number | string;
        sm?: number | string;
      }
) => {
  if (typeof height === 'object' && !Array.isArray(height)) {
    if (screenSize === 'xl') {
      return genHeightValue(height.xl);
    } else if (screenSize === 'md') {
      return genHeightValue(height.md || height.xl);
    } else if (screenSize === 'sm') {
      return genHeightValue(height.sm || height.md || height.xl);
    }
  } else if (typeof height === 'number' || typeof height === 'string') {
    return genHeightValue(height);
  }
  return '';
};

const genHeightValue = (height?: number | string) => {
  if (typeof height === 'number') {
    return `${height}px`;
  }
  if (typeof height === 'string') {
    return height;
  }
  return '';
};
