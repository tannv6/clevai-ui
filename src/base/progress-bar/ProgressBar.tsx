import React, { Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { COLOR_ARRAY, Icon, TIcon } from '..';
import colors from '../css/colors.scss';
import progressStyles from './progress.scss';

type Props = {
  type?: 'dot' | 'bar' | 'circle';
  data?: {
    dot?: { max: number; val: number };
    bar?: { val: number };
    circle?: {
      val: number;
      w: 'xxl' | 'xl' | 'md' | 'lg' | 'sm' | 'xs';
      rotate: number;
      isReverse: boolean;
      text?: string;
      img?: string;
      bg?: typeof COLOR_ARRAY[number];
      icon: TIcon;
    };
  };
  bg?: typeof COLOR_ARRAY[number];
};
function ProgressBar({
  type = 'bar',
  data = { bar: { val: 50 } },
  bg = 'orange6'
}: Props) {
  if (type === 'dot' && data?.dot) {
    return (
      <div className={`${progressStyles.progress}`}>
        <div className={`${progressStyles.wrapper}`}>
          <div className={`${progressStyles.dots}`}>
            {Array(data?.dot?.max)
              .fill(1)
              .map((_e, i) => {
                return (
                  <div
                    key={i}
                    className={`${progressStyles.dot}`}
                    style={{
                      backgroundColor:
                        i < (data?.dot?.val || 0) ? colors[bg] : 'transparent',
                      width: `calc(100% / ${data?.dot?.max || 1})`
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
  if (type === 'circle' && data?.circle) {
    const {
      w,
      val,
      rotate,
      isReverse,
      text,
      img,
      bg: circleBg,
      icon: circleIcon
    } = data.circle;
    const MAP_SIZE_CIRCLE = {
      xxl: { width: 280, thickness: 28 },
      xl: { width: 240, thickness: 24 },
      lg: { width: 200, thickness: 20 },
      md: { width: 160, thickness: 16 },
      sm: { width: 100, thickness: 10 },
      xs: { width: 64, thickness: 6 }
    };
    const strokeDasharray =
      Math.PI * (MAP_SIZE_CIRCLE[w].width - MAP_SIZE_CIRCLE[w].thickness);
    const strokeDashoffset =
      val <= 100 ? (strokeDasharray * val) / 100 : strokeDasharray;
    const MAP_ICON_SIZE = {
      xxl: 'xl' as const,
      xl: 'xl' as const,
      lg: 'xl' as const,
      md: 'xl' as const,
      sm: 'lg' as const,
      xs: 'md' as const
    };
    return (
      <div
        className={`${progressStyles['progress-circle']} ${
          progressStyles[`progress-circle-${w}`]
        }`}
      >
        <svg
          className={progressStyles['svg-circle']}
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          style={{
            transform: `rotate(${rotate || 0}deg) scaleX(-1)`
          }}
        >
          <circle
            style={{
              stroke: colors.orange1,
              strokeDasharray,
              strokeDashoffset: 0
            }}
          />
          <circle
            style={{
              stroke: colors[bg],
              strokeDasharray,
              strokeDashoffset: isReverse
                ? strokeDashoffset
                : strokeDashoffset + strokeDasharray
            }}
          />
        </svg>
        <div
          className={`${progressStyles['icon-wrap']}`}
          style={{
            transform: `rotate(${rotate - 90}deg)`
          }}
        >
          <div
            className={progressStyles.icon}
            style={{
              transform: `translateX(-50%) translateY(calc(-50% + ${
                MAP_SIZE_CIRCLE[w].thickness / 2
              }px)) rotate(-${rotate - 90}deg)`,
              top: 0
            }}
          >
            <Icon type={circleIcon} size={MAP_ICON_SIZE[w]} fill={bg} />
          </div>
        </div>
        <div
          className={`${progressStyles['circle-thumbnail']}`}
          style={{ backgroundColor: colors[circleBg || ''] }}
        >
          {img ? (
            <img
              className={`${progressStyles['thumbnail-image']}`}
              src={img}
              alt=''
            />
          ) : (
            text || ''
          )}
        </div>
      </div>
    );
  }
  if (type === 'bar' && data?.bar) {
    const value = data?.bar?.val <= 100 ? data?.bar?.val : 100;
    return (
      <div className={`${progressStyles.progress}`}>
        <div className={`${progressStyles.wrapper}`}>
          <div
            className={`${progressStyles['progress-completed']}`}
            style={{
              width: `${value}%`,
              background: colors[bg]
            }}
          />
        </div>
        <div
          style={{
            left: `calc(${value}% - 23px)`
          }}
          className={`${progressStyles.number}`}
        >
          {value}%
        </div>
      </div>
    );
  }
  return <Fragment />;
}

export default ProgressBar;
