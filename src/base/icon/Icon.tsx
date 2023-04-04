import React from 'react';
// eslint-disable-next-line no-unused-vars
import { TIcon, icons } from './icons-components';
import { COLOR_ARRAY } from '..';
import colors from '../css/colors.scss';
import styles from './icon.scss';
interface Props {
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | ('xl' | 'lg' | 'md' | 'sm' | 'xs')[];
  type: TIcon;
  fill?: typeof COLOR_ARRAY[number];
}

const Icon = ({ size, type, fill }: Props) => {
  const Element = icons[type] || icons.circle;
  return (
    <Element className={getIconClassName(size)} fill={colors[fill || '']} />
  );
};

Icon.defaultProps = {
  size: 'sm',
  type: 'circle',
  fill: ''
};

export default Icon;

const getIconClassName = (
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | ('xl' | 'lg' | 'md' | 'sm' | 'xs')[]
) => {
  if (typeof size === 'string') {
    return styles[size];
  } else if (Array.isArray(size)) {
    let cls = '';
    if (size[0]) {
      cls += styles[`desktop-${size[0]}`] + ' ';
    }
    if (size[1]) {
      cls += styles[`tablet-${size[1]}`] + ' ';
    }
    if (size[2]) {
      cls += styles[`mobile-${size[2]}`] + ' ';
    }
    return cls;
  }
  return '';
};
