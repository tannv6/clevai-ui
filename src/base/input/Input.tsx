import React from 'react';
import styles from './input.scss';

interface Props {
  size: 'xs' | 'sm' | 'md' | 'lg';
  placeholder?: string;
}

const Button = ({ size, placeholder }: Props) => {
  return (
    <div className={`${styles['input-wrapper']}`}>
      <input
        className={`${styles['input-container']} ${styles[`${size}`]}`}
        placeholder={placeholder}
      />
    </div>
  );
};

Button.defaultProp = {
  sm: 'md'
};

export default Button;
