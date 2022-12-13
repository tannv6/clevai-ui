import React from 'react';
import styles from './layout.scss';

interface Props {
  mt: number;
  mr: number;
  mb: number;
  ml: number;
  pt: number;
  pr: number;
  pb: number;
  pl: number;
  col: number;
  children: React.ReactNode;
  bg: string;
  br: number;
}

const Row = ({
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  col,
  children,
  bg,
  br
}: Props) => {
  return (
    <div
      className={
        styles[`row`] +
        ' ' +
        styles[`bg-${bg}`] +
        ' ' +
        styles[`br-${br}`] +
        ' ' +
        styles[`col-${col}`] +
        ' ' +
        styles[`mt-${mt}`] +
        ' ' +
        styles[`mr-${mr}`] +
        ' ' +
        styles[`mb-${mb}`] +
        ' ' +
        styles[`ml-${ml}`] +
        ' ' +
        styles[`pt-${pt}`] +
        ' ' +
        styles[`pr-${pr}`] +
        ' ' +
        styles[`pb-${pb}`] +
        ' ' +
        styles[`pl-${pl}`]
      }
    >
      {children}
    </div>
  );
};

Row.defaultProps = {
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
  pt: 0,
  pb: 0,
  pr: 0,
  pl: 0,
  col: 12,
  bg: 'tranparent',
  br: 0
};

export default Row;
