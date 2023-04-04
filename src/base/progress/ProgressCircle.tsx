import React, { useMemo } from 'react';
import progressStyles from './progress.scss';
import colors from '../css/colors.scss';
// eslint-disable-next-line no-unused-vars
import { Icon, TIcon } from '../icon';
import { COLOR_ARRAY } from '..';

type Props = {
  bg?: typeof COLOR_ARRAY[number];
  data: {
    val: number;
    size:
      | 280
      | 240
      | 200
      | 160
      | 100
      | 64
      | (280 | 240 | 200 | 160 | 100 | 64)[];
    rotate: number;
    isReverse: boolean;
    text?: string;
    textColor?: typeof COLOR_ARRAY[number];
    img?: string;
    bg?: typeof COLOR_ARRAY[number];
    icon: TIcon;
  };
};

function ProgressCircle({ bg = 'orange6', data }: Props) {
  const {
    size,
    val,
    rotate,
    isReverse,
    text,
    img,
    bg: circleBg,
    icon: circleIcon,
    textColor
  } = data;

  const MAP_ICON_SIZE = {
    280: 'xl' as const,
    240: 'xl' as const,
    200: 'xl' as const,
    160: 'xl' as const,
    100: 'lg' as const,
    64: 'md' as const
  };

  const process = val >= 100 ? 100 : val || 0;

  const iconSize = useMemo(() => {
    if (typeof size === 'number') {
      return MAP_ICON_SIZE[size];
    } else if (Array.isArray(size)) {
      return [
        MAP_ICON_SIZE[size[0]],
        MAP_ICON_SIZE[size[1]],
        MAP_ICON_SIZE[size[2]]
      ];
    }
    return undefined;
  }, [size]);

  return (
    <div
      className={`${progressStyles['progress-circle']} ${getProgressClassName(
        size
      )}`}
      style={
        {
          '--val': process / 100 + (isReverse ? 1 : 0)
        } as any
      }
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
          className={progressStyles.circle1}
          style={{
            stroke: colors.orange1
          }}
        />
        <circle
          className={progressStyles.circle2}
          style={{
            stroke: colors[bg]
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
          style={
            {
              '--rotate': `${-(rotate - 90)}deg`
            } as any
          }
        >
          <Icon type={circleIcon} size={iconSize} fill={bg} />
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
          ''
        )}
        {text ? (
          <span
            style={{
              position: 'absolute',
              color: colors[textColor || 'gray85']
            }}
            className=''
          >
            {text}
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default ProgressCircle;

const getProgressClassName = (
  size: 280 | 240 | 200 | 160 | 100 | 64 | (280 | 240 | 200 | 160 | 100 | 64)[]
) => {
  if (typeof size === 'number') {
    return progressStyles[`progress-circle-${size}`];
  } else if (Array.isArray(size)) {
    let cls = '';
    if (size[0]) {
      cls += progressStyles[`progress-circle-xl-${size[0]}`] + ' ';
    }
    if (size[1]) {
      cls += progressStyles[`progress-circle-md-${size[1] || size[0]}`] + ' ';
    }
    if (size[2]) {
      cls +=
        progressStyles[`progress-circle-sm-${size[2] || size[1] || size[0]}`] +
        ' ';
    }
    return cls;
  }
  return '';
};
