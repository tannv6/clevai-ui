import React from 'react';
import CircleIcon from './CircleIcon';
import FacebookIcon from './FacebookIcon';
import ArrowLeftIcon from './ArrowLeftIcon';
import ArrowRightIcon from './ArrowRightIcon';
import CloseIcon from './CloseIcon';

interface Props {
  size: string;
  color: string;
  type: string;
}

const icons = {
  circle: CircleIcon,
  fb: FacebookIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  close: CloseIcon
};

const Icon = ({ size, color, type }: Props) => {
  const Element = icons[type] || icons.circle;
  return <Element size={size} color={color} />;
};

export default Icon;
