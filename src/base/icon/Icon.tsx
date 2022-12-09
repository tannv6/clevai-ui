import React from 'react';
import CircleIcon from './CircleIcon';

interface Props {
  size: string;
  color: string;
}

const Icon = ({ size, color }: Props) => {
  return <CircleIcon size={size} color={color} />;
};

export default Icon;
