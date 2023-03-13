import React from 'react';
import styles from './col.scss';

interface Props {
  offset?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  order?: -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: React.ReactNode;
}
const Col = ({ offset, order, xl, md, sm, children }: Props) => {
  return (
    <div
      className={
        styles.col +
        ' ' +
        styles[`offset-${offset}`] +
        ' ' +
        styles[`order-${order}`] +
        ' ' +
        styles[`xl-${xl}`] +
        ' ' +
        styles[`md-${md}`] +
        ' ' +
        styles[`sm-${sm}`]
      }
    >
      {children}
    </div>
  );
};

Col.defaultProps = {
  offset: 0,
  xl: 4,
  md: 6,
  sm: 12
};

export default Col;
