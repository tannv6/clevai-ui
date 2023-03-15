import React from 'react';
import styles from './col.scss';

interface Props {
  offset?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  order?: -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: React.ReactNode;
}
const Col = ({ offset, order, xl, md, sm, children, span }: Props) => {
  return (
    <div
      className={`${styles.col} ${offset ? styles[`offset-${offset}`] : ''} ${
        span ? styles[`span-${span}`] : ''
      } ${order ? styles[`order-${order}`] : ''} ${
        !span && xl ? styles[`xl-${xl}`] : ''
      } ${!span && md ? styles[`md-${md}`] : ''} ${
        !span && sm ? styles[`sm-${sm}`] : ''
      }`.replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
};

Col.defaultProps = {
  xl: 6,
  md: 6,
  sm: 6
};

export default Col;
