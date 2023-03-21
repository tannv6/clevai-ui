import React from 'react';
import { COLOR_ARRAY } from '..';
import tagStyles from './tag.scss';
import colors from '../css/colors.scss';
type TSize = 48 | 40 | 32 | 24;

type Props = {
  dot?: boolean;
  type?: 'filled' | 'outline' | 'text';
  color?: typeof COLOR_ARRAY[number];
  size?:
    | TSize
    | {
        xl: TSize;
        md: TSize;
        sm: TSize;
      };
  children?: React.ReactNode;
};

function Tag({
  size = 32,
  color = 'orange6',
  type = 'filled',
  dot,
  children
}: Props) {
  return (
    <div
      style={{
        backgroundColor: type === 'filled' ? colors[color] : undefined,
        boxShadow:
          type === 'outline' ? `0 0 0 1px ${colors[color]} inset` : undefined
      }}
      className={`${tagStyles.tag} ${getTagClassName(size)}`}
    >
      {dot && (
        <div className={tagStyles.dotWrap}>
          <span
            style={{
              backgroundColor: type === 'filled' ? '#fff' : colors[color]
            }}
            className={tagStyles.dot}
          />
        </div>
      )}
      <div
        className={tagStyles.title}
        style={{
          color: type === 'filled' ? '#fff' : colors[color]
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Tag;

const getTagClassName = (
  size:
    | TSize
    | {
        xl: TSize;
        md: TSize;
        sm: TSize;
      }
) => {
  if (typeof size === 'number') {
    return `${tagStyles[`tag-size-${size}`]}`;
  } else if (typeof size === 'object' && !Array.isArray(size)) {
    let className = '';
    if (size.xl) {
      className += `${tagStyles[`tag-size-xl-${size.xl}`]} `;
    }
    if (size.md) {
      className += `${tagStyles[`tag-size-xl-${size.xl}`]} `;
    }
    if (size.sm) {
      className += `${tagStyles[`tag-size-xl-${size.xl}`]} `;
    }
    return className;
  }
  return '';
};
