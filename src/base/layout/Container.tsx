import React from 'react';
import styles from './layout.scss';

interface Props {
  children: React.ReactNode;
  bg: string;
}

const Container = ({ children, bg }: Props) => {
  return (
    <div className={styles[`bg-${bg}`] + ' ' + styles['container']}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  bg: 'tranparent'
};

export default Container;
