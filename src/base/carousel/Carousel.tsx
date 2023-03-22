/* eslint-disable dot-notation */
import React, { useState } from 'react';
import { COLOR_ARRAY } from '../index';
import styles from './carousel.scss';

interface Props {
  color?: typeof COLOR_ARRAY[number];
  dotColor?: typeof COLOR_ARRAY[number];
  children: any;
}

const Carousel = ({ color, children }: Props) => {
  const [sliderActive, setSliderActive] = useState(0);
  const iconNext = (
    <svg
      width={36}
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='36' height='36' rx='18' fill={color} />
      <path
        d='M15.5 23L20.5 18L15.5 13'
        stroke='white'
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
      <rect width='36' height='36' rx='18' fill={color} />
      <path
        d='M20.5 23L15.5 18L20.5 13'
        stroke='white'
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
  const handleNextStep = () => {
    setTimeout(() => {}, 1000);
    if (sliderActive + 1 === children?.length) {
      setSliderActive(0);
    } else {
      setTimeout(() => {
        setSliderActive(sliderActive + 1);
      }, 1);
    }
  };
  const handleBackStep = () => {
    if (sliderActive === 0) {
      setSliderActive(children?.length - 1);
    } else {
      setSliderActive(sliderActive - 1);
    }
  };
  return (
    <div className={`${styles['carousel__container']}`}>
      <div className={`${styles.carousel__sliders}`}>
        {React.Children?.map(children, (slide, index) => {
          return (
            <div
              key={index}
              className={`${styles['carousel__slider']}`}
              style={{
                left: `${(index - sliderActive) * 100}%`
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
              key={index}
              className={`${
                styles[
                  `carousel__dot${index === sliderActive ? '-active' : ''}`
                ]
              }`}
            />
          );
        })}
      </div>
      <div className={`${styles['carousel__next']}`} onClick={handleNextStep}>
        {iconNext}
      </div>
      <div className={`${styles['carousel__back']}`} onClick={handleBackStep}>
        {iconBack}
      </div>
    </div>
  );
};

Carousel.defaultProp = {
  color: 'gray4Color',
  dotColor: 'gray4Color'
};

export default Carousel;
