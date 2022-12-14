import React from 'react';
import styles from './button.scss';

interface Props {
  children: React.ReactNode;
  type: string;
  id: string;
}

const Button = ({ children, type, id }: Props) => {
  return (
    <div id={id} className={styles[`button-${type}`]}>
      {children}
    </div>
  );
};

Button.defaultProps = { type: '1', id: '' };

export default Button;
