import React from 'react';
import styles from './layout.scss';
import color from '../typography/typography.scss';
import { COLOR_ARRAY } from '..';
const GRID_VALUE = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24
] as const;
type Props = {
  children?: any;
  className?: string;
  pd?:
    | (typeof GRID_VALUE[number][] | typeof GRID_VALUE[number])[]
    | typeof GRID_VALUE[number];
  mg?:
    | (typeof GRID_VALUE[number][] | typeof GRID_VALUE[number])[]
    | typeof GRID_VALUE[number];
  bg?: typeof COLOR_ARRAY[number];
  br?: typeof GRID_VALUE[number];
  w?: string | number;
  inline?: boolean;
};
function Wrapper({ children, pd, bg, br, mg, w, className, inline }: Props) {
  return (
    <div
      className={`${className ? `${className} ` : ''}${styles.wrapper} ${
        inline ? styles['display-inline'] : ''
      } ${genClassName(pd, 'p')} ${genClassName(mg, 'm')} ${
        styles[`br-${br}`]
      }`}
      style={{ background: color[bg || ''], width: w }}
    >
      {children}
    </div>
  );
}

export default Wrapper;

const getClassName = (
  value: typeof GRID_VALUE[number][] | typeof GRID_VALUE[number],
  type: string,
  prop: string
) => {
  return value
    ? typeof value === 'number'
      ? styles[`${prop}-${type || ''}${value}`]
      : typeof value === 'object'
      ? value.length === 1
        ? styles[`${prop}-${type || ''}${value[0]}`]
        : value.length === 2
        ? `${styles[`${prop}-t-${type || ''}${value[0]}`]} ${
            styles[`${prop}-r-${type || ''}${value[1]}`]
          } ${styles[`${prop}-b-${type || ''}${value[0]}`]} ${
            styles[`${prop}-l-${type || ''}${value[1]}`]
          }`
        : value.length === 3
        ? `${styles[`${prop}-t-${type || ''}${value[0]}`]} ${
            styles[`${prop}-r-${type || ''}${value[1]}`]
          } ${styles[`${prop}-b-${type || ''}${value[2]}`]} ${
            styles[`${prop}-l-${type || ''}${value[1]}`]
          }`
        : value.length === 4
        ? `${styles[`${prop}-t-${type || ''}${value[0]}`]} ${
            styles[`${prop}-r-${type || ''}${value[1]}`]
          } ${styles[`${prop}-b-${type || ''}${value[2]}`]} ${
            styles[`${prop}-l-${type || ''}${value[3]}`]
          }`
        : ''
      : ''
    : '';
};

const genClassName = (val: any, prop: 'p' | 'm') => {
  if (typeof val === 'number') {
    return `${styles[`${prop}-${val}`]}`;
  } else if (typeof val === 'object') {
    const padDesktop = getClassName(val[0], '', prop);
    const padTablet = getClassName(val[1], 't-', prop);
    const padMobile = getClassName(val[2], 'm-', prop);
    return `${padDesktop}${padTablet ? ` ${padTablet}` : ''}${
      padMobile ? ` ${padMobile}` : ''
    }`;
  } else {
    return '';
  }
};
