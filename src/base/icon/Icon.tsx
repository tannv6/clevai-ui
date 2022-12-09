import React from 'react';
import CircleIcon from './CircleIcon';

interface Props {
  size: string;
  color: string;
  icon: string;
}

const Icon = ({ size, color, icon }: Props) => {
  return <CircleIcon size={size} color={color} />;
};

export default Icon;
