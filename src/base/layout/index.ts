import { GRID_VALUES } from '..';

export { default as Row } from './Row';
export { default as Rows } from './Rows';
export { default as Col } from './Col';
export { default as Container } from './Container';
export { default as Wrapper } from './Wrapper';

type TGridValue =
  | {
      t?: typeof GRID_VALUES[number];
      r?: typeof GRID_VALUES[number];
      b?: typeof GRID_VALUES[number];
      l?: typeof GRID_VALUES[number];
    }
  | typeof GRID_VALUES[number];

type TResponsive = TGridValue[] | TGridValue;

const getGridValues = (
  value: TGridValue,
  type: 'xl-' | 'md-' | 'sm-',
  prop: string,
  styles: any
) => {
  let res = '';
  if (typeof value === 'number') {
    res += ` ${styles[`${prop}-${type || ''}${value}`]}`;
  } else if (
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value !== null
  ) {
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

export const generateGridClassName = (
  val: TResponsive | undefined,
  prop: 'p' | 'm',
  styles: any
) => {
  if (typeof val === 'number') {
    return `${styles[`${prop}-${val}`]}`;
  } else if (typeof val === 'object') {
    if (Array.isArray(val) && val?.length > 0) {
      const padDesktop = getGridValues(val[0], 'xl-', prop, styles);
      const padTablet = getGridValues(val[1], 'md-', prop, styles);
      const padMobile = getGridValues(val[2], 'sm-', prop, styles);
      return `${padDesktop}${padTablet ? ` ${padTablet}` : ''}${
        padMobile ? ` ${padMobile}` : ''
      }`;
    } else if (!Array.isArray(val) && val !== null) {
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
    return '';
  } else {
    return '';
  }
};
