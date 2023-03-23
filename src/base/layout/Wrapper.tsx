import React from 'react';
import styles from './layout.scss';
import color from '../css/colors.scss';
import { COLOR_ARRAY, generateGridClassName, GRID_VALUES } from '..';
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
      className={`${className ? `${className} ` : ''}${styles.wrapper} 
      ${inline ? styles['display-inline'] : ''} 
      ${generateGridClassName(pd, 'p', styles)} 
      ${generateGridClassName(mg, 'm', styles)} 
      ${br ? styles[`br-${br}`] : ''}`.replace(/\s+/g, ' ')}
      style={{ background: color[bg || ''], width: w }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
