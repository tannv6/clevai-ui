import React from 'react';
import styles from './layout.scss';
import color from '../css/colors.scss';
import { COLOR_ARRAY, GRID_VALUES } from '..';
type TResponsive =
  | (
      | {
          t?: typeof GRID_VALUES[number];
          r?: typeof GRID_VALUES[number];
          b?: typeof GRID_VALUES[number];
          l?: typeof GRID_VALUES[number];
        }
      | typeof GRID_VALUES[number]
    )[]
  | typeof GRID_VALUES[number]
  | {
      t?: typeof GRID_VALUES[number];
      r?: typeof GRID_VALUES[number];
      b?: typeof GRID_VALUES[number];
      l?: typeof GRID_VALUES[number];
    };
type Props = {
  children?: any;
  className?: string;
  pd?: TResponsive;
  mg?: TResponsive;
  bg?: typeof COLOR_ARRAY[number];
  br?: typeof GRID_VALUES[number];
  w?: string | number;
  inline?: boolean;
};
function Wrapper({ children, pd, bg, br, mg, w, className, inline }: Props) {
  return (
    <div
      className={`${className ? `${className} ` : ''}${styles.wrapper} ${
        inline ? styles['display-inline'] : ''
      } ${genClassName(pd, 'p')} ${genClassName(mg, 'm')} ${
        br ? styles[`br-${br}`] : ''
      }`.replace(/\s+/g, ' ')}
      style={{ background: color[bg || ''], width: w }}
    >
      {children}
    </div>
  );
}

export default Wrapper;

const getClassName = (
  value: any,
  type: 'xl-' | 'md-' | 'sm-',
  prop: string
) => {
  let res = '';
  if (typeof value === 'number') {
    res += ` ${styles[`${prop}-${type || ''}${value}`]}`;
  } else if (typeof value === 'object') {
    if (value.t) {
      res += ` ${styles[`${prop}t-${type || ''}${value.t}`]}`;
    }
    if (value.r) {
      res += ` ${styles[`${prop}r-${type || ''}${value.r}`]}`;
    }
    if (value.b) {
      res += ` ${styles[`${prop}b-${type || ''}${value.b}`]}`;
    }
    if (value.l) {
      res += ` ${styles[`${prop}l-${type || ''}${value.l}`]}`;
    }
  }
  return res;
};

const genClassName = (val: any, prop: 'p' | 'm') => {
  if (typeof val === 'number') {
    return `${styles[`${prop}-${val}`]}`;
  } else if (typeof val === 'object') {
    if (val?.length > 0) {
      const padDesktop = getClassName(val[0], 'xl-', prop);
      const padTablet = getClassName(val[1], 'md-', prop);
      const padMobile = getClassName(val[2], 'sm-', prop);
      return `${padMobile ? ` ${padMobile}` : ''}${
        padTablet ? ` ${padTablet}` : ''
      }${padDesktop}`;
    } else {
      let res = '';
      if (val.t) {
        res += ` ${styles[`${prop}t-${val.t}`]}`;
      }
      if (val.r) {
        res += ` ${styles[`${prop}r-${val.r}`]}`;
      }
      if (val.b) {
        res += ` ${styles[`${prop}b-${val.b}`]}`;
      }
      if (val.l) {
        res += ` ${styles[`${prop}l-${val.l}`]}`;
      }

      return res;
    }
  } else {
    return '';
  }
};
