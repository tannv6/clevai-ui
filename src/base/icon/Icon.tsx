import React from 'react';
import CircleIcon from './CircleIcon';
import FacebookIcon from './FacebookIcon';

interface Props {
  size: string;
  color: string;
  type: string;
}

const icons = {
  circle: CircleIcon,
  fb: FacebookIcon
};

const Icon = ({ size, color, type }: Props) => {
  const Element = icons[type] || icons.circle;
  return <Element size={size} color={color} />;
};

export default Icon;
