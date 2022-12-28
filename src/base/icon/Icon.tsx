import React from 'react';
import CircleIcon from './CircleIcon';
import FacebookIcon from './FacebookIcon';
import ArrowLeftIcon from './ArrowLeftIcon';
import ArrowRightIcon from './ArrowRightIcon';

interface Props {
  size: string;
  color: string;
  type: string;
}

const icons = {
  circle: CircleIcon,
  fb: FacebookIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon
};

const Icon = ({ size, color, type }: Props) => {
  const Element = icons[type] || icons.circle;
  return <Element size={size} color={color} />;
};

export default Icon;
