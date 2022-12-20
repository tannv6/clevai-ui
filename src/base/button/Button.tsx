import React from 'react';
import { Icon } from '../icon';
import styles from './button.scss';

interface Props {
  children: React.ReactNode;
  id: string;
  className?: string;
  isDisable?: boolean;
  onPress?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icons?: ('facebook' | 'circle')[];
  width?: string;
  type: 'primary' | 'default' | 'text' | 'link';
  system: 'student' | 'parent';
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = ({
  children,
  id,
  className,
  onPress,
  isDisable,
  icons,
  type,
  system,
  size,
  width
}: Props) => {
  const MAP_ICON_SIZE = {
    sm: 'xs',
    md: 'sm',
    lg: 'sm',
    xl: 'md'
  };

  return (
    <button
      id={id}
      className={`${className} ${styles[`btn-bg-${system}`]} ${
        styles[`btn-type-${type}`]
      } ${styles[`btn-size-${size}`]}`}
      onClick={onPress}
      disabled={isDisable}
      style={{
        width: width
      }}
    >
      {icons && icons[0] && (
        <Icon color='white' size={MAP_ICON_SIZE[size]} type={icons[0]} />
      )}
      {children}
      {icons && icons[1] && (
        <Icon color='white' size={MAP_ICON_SIZE[size]} type={icons[1]} />
      )}
    </button>
  );
};

Button.defaultProp = {
  id: '',
  className: '',
  onPress: () => {},
  type: 'default',
  system: 'student',
  size: 'lg',
  icons: []
};

export default Button;
