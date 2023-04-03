import React from 'react';
// eslint-disable-next-line no-unused-vars
import { TIcon, icons } from './icons-components';
import { COLOR_ARRAY } from '..';
import colors from '../css/colors.scss';

interface Props {
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  color?: string;
  type: TIcon;
  fill?: typeof COLOR_ARRAY[number];
}

const Icon = ({ size, color, type, fill }: Props) => {
  const Element = icons[type] || icons.circle;
  return <Element size={size} color={color || ''} fill={colors[fill || '']} />;
};

Icon.defaultProps = {
  size: 'sm',
  type: 'circle',
  fill: ''
};

export default Icon;
