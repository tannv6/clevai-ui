import React from 'react';
import styles from './label.scss';

interface Props {
  children: React.ReactNode;
  type: string;
  mt: number;
  mr: number;
  mb: number;
  ml: number;
}

const Label = ({ mt, mb, ml, mr, children, type }: Props) => {
  return (
    <span
      className={
        styles[`label-${type}`] +
        ' ' +
        styles[`mt-${mt}`] +
        ' ' +
        styles[`mr-${mr}`] +
        ' ' +
        styles[`mb-${mb}`] +
        ' ' +
        styles[`ml-${ml}`]
      }
    >
      {children}
    </span>
  );
};

Label.defaultProps = { mt: 0, mb: 0, mr: 0, ml: 0, type: '1' };

export default Label;
