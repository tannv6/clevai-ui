import React from 'react';
import styles from './typography.scss';

interface Props {
  type: string;
  font: string;
  children: React.ReactNode;
  display: string;
  align: string;
  color: string;
  id?: string;
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

const Heading = ({
  children,
  type,
  font,
  display,
  align,
  color,
  id
}: Props) => {
  const className = `${styles[type]} ${styles['display-' + display]} ${
    styles['color-' + color]
  } ${styles['align-' + align]} ${styles['font-' + font]}`;
  if (TYPES.h1 === type) {
    return (
      <h1 id={id} className={className}>
        {children}
      </h1>
    );
  }
  if (TYPES.h2 === type) {
    return (
      <h2 id={id} className={className}>
        {children}
      </h2>
    );
  }
  if (TYPES.h3 === type) {
    return (
      <h3 id={id} className={className}>
        {children}
      </h3>
    );
  }
  if (TYPES.h4 === type) {
    return (
      <h4 id={id} className={className}>
        {children}
      </h4>
    );
  }
  if (TYPES.body === type) {
    return (
      <p id={id} className={className}>
        {children}
      </p>
    );
  }
  if (TYPES.caption === type) {
    return (
      <p id={id} className={className}>
        {children}
      </p>
    );
  }
  if (TYPES.note === type) {
    return (
      <label id={id} className={className}>
        {children}
      </label>
    );
  }

  return (
    <p id={id} className={className}>
      {children}
    </p>
  );
};

Heading.defaultProps = { display: 'block', align: 'left', color: 'gray' };

export default Heading;
