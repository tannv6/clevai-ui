import React from 'react';
import { COLOR_ARRAY, GRID_VALUES } from '..';
import styles from './layout.scss';
import color from '../css/colors.scss';
type TResponsive =
  | (
      | {
          t?: typeof GRID_VALUES[number];
          b?: typeof GRID_VALUES[number];
        }
      | typeof GRID_VALUES[number]
    )[]
  | typeof GRID_VALUES[number]
  | {
      t?: typeof GRID_VALUES[number];
      b?: typeof GRID_VALUES[number];
    };
interface Props {
  mg?: TResponsive;
  pd?: TResponsive;
  gutters:
    | typeof GRID_VALUES[number]
    | {
        xl: typeof GRID_VALUES[number];
        md: typeof GRID_VALUES[number];
        sm: typeof GRID_VALUES[number];
      }
    | (
        | typeof GRID_VALUES[number]
        | {
            xl: typeof GRID_VALUES[number];
            md: typeof GRID_VALUES[number];
            sm: typeof GRID_VALUES[number];
          }
      )[];
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  children?: React.ReactNode;
  bg?: typeof COLOR_ARRAY[number];
  br?: typeof GRID_VALUES[number];
  reversed?: boolean;
}

const Rows = ({
  mg,
  pd,
  gutters,
  justify,
  align,
  children,
  bg,
  br,
  reversed
}: Props) => {
  return (
    <div
      style={{ background: color[bg || ''] }}
      className={`${styles.rows} ${reversed ? styles[`rows-reversed`] : ''} ${
        bg ? styles[`bg-${bg}`] : ''
      } ${br ? styles[`br-${br}`] : ''} ${genClassName(pd, 'p')} ${genClassName(
        mg,
        'm'
      )} ${genGutters(gutters)} ${
        justify ? styles[`justify-${justify}`] : ''
      } ${align ? styles[`align-${align}`] : ''}`.replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
};

const genGutters = (gutters: any) => {
  if (typeof gutters === 'number') {
    return styles[`gutter-x-${gutters}`];
  } else if (typeof gutters === 'object') {
    let gutterClass = '';
    if (gutters.length > 0) {
      if (typeof gutters[0] === 'number') {
        gutterClass += styles[`gutter-x-${gutters[0]}`] += ' ';
      } else if (typeof gutters[0] === 'object') {
        gutterClass += styles[`gutter-x-xl-${gutters[0].xl}`] += ' ';
        gutterClass += styles[`gutter-x-md-${gutters[0].md}`] += ' ';
        gutterClass += styles[`gutter-x-sm-${gutters[0].sm}`] += ' ';
      }
      if (typeof gutters[1] === 'number') {
        gutterClass += styles[`gutter-y-${gutters[1]}`] += ' ';
      } else if (typeof gutters[1] === 'object') {
        gutterClass += styles[`gutter-y-xl-${gutters[1].xl}`] += ' ';
        gutterClass += styles[`gutter-y-md-${gutters[1].md}`] += ' ';
        gutterClass += styles[`gutter-y-sm-${gutters[1].sm}`] += ' ';
      }
    } else {
      if (gutters.xl) {
        gutterClass += styles[`gutter-x-xl-${gutters}`] += ' ';
      }
      if (gutters.md) {
        gutterClass += styles[`gutter-x-md-${gutters}`] += ' ';
      }
      if (gutters.sm) {
        gutterClass += styles[`gutter-x-sm-${gutters}`] += ' ';
      }
    }

    return gutterClass;
  }
  return '';
};

export default Rows;

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
      return `${padDesktop}${padTablet ? ` ${padTablet}` : ''}${
        padMobile ? ` ${padMobile}` : ''
      }`;
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
