import React from 'react';
import { COLOR_ARRAY } from '..';
import styles from './typography.scss';
import colors from '../css/colors.scss';

interface Props {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'note';
  font: 'bold' | 'semibold' | 'medium' | 'regular';
  children?: React.ReactNode;
  display: 'inline' | 'block';
  align: 'center' | 'left' | 'right';
  color: typeof COLOR_ARRAY[number];
  id?: string;
}

const MAP_TYPES_TO_TAGS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  caption: 'p',
  note: 'label'
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
    styles['align-' + align]
  } ${styles['font-' + font]}`;
  return React.createElement(
    MAP_TYPES_TO_TAGS[type] || 'p',
    { className, id, style: { color: colors[color] } },
    children
  );
};

Heading.defaultProps = {
  display: 'block',
  align: 'left',
  color: 'gray',
  font: 'regular'
};

export default Heading;
