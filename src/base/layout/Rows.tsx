import React from 'react';
import styles from './layout.scss';

interface Props {
  mt: number;
  mr: number;
  mb: number;
  ml: number;
  pt: number;
  pr: number;
  gutterXs?: number;
  gutterMd?: number;
  gutterXl?: number;
  justify:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  align: string;
  pb: number;
  pl: number;
  children: React.ReactNode;
  bg: string;
  br: number;
  reversed?: boolean;
}

const Rows = ({
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  gutterXs,
  gutterMd,
  gutterXl,
  pr,
  justify,
  align,
  children,
  bg,
  br,
  reversed
}: Props) => {
  return (
    <div
      className={
        styles.row +
        ' ' +
        styles[`rows-${reversed ? 'reversed' : ''}`] +
        ' ' +
        styles[`bg-${bg}`] +
        ' ' +
        styles[`br-${br}`] +
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
        styles[`pl-${pl}`] +
        ' ' +
        styles[`gutter-xs-${gutterXs}`] +
        ' ' +
        styles[`gutter-md-${gutterMd}`] +
        ' ' +
        styles[`gutter-xl-${gutterXl}`] +
        ' ' +
        styles[`justify-${justify}`] +
        ' ' +
        styles[`align-${align}`]
      }
    >
      {children}
    </div>
  );
};

Rows.defaultProps = {
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
  pt: 0,
  pb: 0,
  pr: 0,
  gutterXs: 1,
  gutterMd: 1,
  gutterXl: 1,
  pl: 0,
  bg: 'tranparent',
  justify: 'center',
  align: 'center',
  br: 0
};

export default Rows;
