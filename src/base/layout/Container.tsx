import React from 'react';
import styles from './layout.scss';

interface Props {
  children: React.ReactNode;
  bg: string;
  isFullWidth: boolean;
}

const Container = ({ children, bg, isFullWidth }: Props) => {
  return (
    <div
      className={
        styles[`bg-${bg}`] +
        ' ' +
        styles[`container${isFullWidth ? '-fluid' : ''}`]
      }
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  bg: 'tranparent',
  isFullWidth: false
};

export default Container;
