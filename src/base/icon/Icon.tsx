import React from 'react';
import CircleIcon from './CircleIcon';
import FacebookIcon from './FacebookIcon';
import ArrowLeftIcon from './ArrowLeftIcon';
import ArrowRightIcon from './ArrowRightIcon';
import CloseIcon from './CloseIcon';
import BookIcon from './BookIcon';
import GiftIcon from './GiftIcon';
import ChestnutIcon from './ChestnutIcon';
import StarIcon from './StarIcon';
import Close2Icon from './Close2Icon';

interface Props {
  size: string;
  color: string;
  type: string;
  fill?: string;
}

const icons = {
  circle: CircleIcon,
  fb: FacebookIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  close: CloseIcon,
  gift: GiftIcon,
  star: StarIcon,
  close2: Close2Icon,
  chestnut: ChestnutIcon,
  book: BookIcon
};

const Icon = ({ size, color, type, fill }: Props) => {
  const Element = icons[type] || icons.circle;
  return <Element size={size} color={color} fill={fill} />;
};

Icon.defaultProp = {
  size: 'sm',
  color: 'primary',
  type: 'circle',
  fill: ''
};

export default Icon;
