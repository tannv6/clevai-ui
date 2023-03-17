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
import Education from './Education';
import { COLOR_ARRAY } from '..';
import colors from '../css/colors.scss';
import Goal from './Goal';
import Logout from './Logout';
import Setting from './Setting';
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
  book: BookIcon,
  edu: Education,
  goal: Goal,
  logout: Logout,
  setting: Setting
};

export type TIcon =
  | 'circle'
  | 'fb'
  | 'arrowLeft'
  | 'arrowRight'
  | 'close'
  | 'gift'
  | 'star'
  | 'close2'
  | 'chestnut'
  | 'book'
  | 'edu'
  | 'goal'
  | 'logout'
  | 'setting';

interface Props {
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  color?: string;
  type: TIcon;
  fill?: typeof COLOR_ARRAY[number];
}

const Icon = ({ size, color, type, fill }: Props) => {
  const Element = icons[type] || icons.circle;
  return (
    <Element size={size} color={color || ''} fill={colors[`${fill}`] || ''} />
  );
};

Icon.defaultProp = {
  size: 'sm',
  color: 'primary',
  type: 'circle',
  fill: ''
};

export default Icon;
