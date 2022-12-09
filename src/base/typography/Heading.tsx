import React from 'react';
import styles from './typography.scss';

interface Props {
  type: string;
  font: string;
  children: React.ReactNode;
}

const TYPES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'body',
  caption: 'caption',
  note: 'note'
};

const Heading = ({ children, type, font }: Props) => {
  if (TYPES.h1 === type) {
    return (
      <h1 className={`${styles[type]} ${styles['font-' + font]}`}>
        {children}
      </h1>
    );
  }
  if (TYPES.h2 === type) {
    return (
      <h2 className={`${styles[type]} ${styles['font-' + font]}`}>
        {children}
      </h2>
    );
  }
  if (TYPES.h3 === type) {
    return (
      <h3 className={`${styles[type]} ${styles['font-' + font]}`}>
        {children}
      </h3>
    );
  }
  if (TYPES.h4 === type) {
    return (
      <h4 className={`${styles[type]} ${styles['font-' + font]}`}>
        {children}
      </h4>
    );
  }
  if (TYPES.body === type) {
    return (
      <p className={`${styles[type]} ${styles['font-' + font]}`}>{children}</p>
    );
  }
  if (TYPES.caption === type) {
    return (
      <p className={`${styles[type]} ${styles['font-' + font]}`}>{children}</p>
    );
  }
  if (TYPES.note === type) {
    return (
      <label className={`${styles[type]} ${styles['font-' + font]}`}>
        {children}
      </label>
    );
  }

  return (
    <p className={`${styles[type]} ${styles['font-' + font]}`}>{children}</p>
  );
};

export default Heading;
