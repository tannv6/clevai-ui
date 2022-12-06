import * as React from 'react';
import styles from './exampleButton.css';

interface Props {
  text: string;
  type: string;
}

export const ExampleButton = ({ text, type }: Props) => {
  return <div className={styles[type]}>{text}</div>;
};
