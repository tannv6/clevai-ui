import React from 'react';
import CircleLoading from '../loading/CircleLoading';
import styles from './button.scss';
// eslint-disable-next-line no-unused-vars
import { Icon, TIcon } from '../icon';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  icons?: TIcon[];
  width?: string;
  color?: 'orange' | 'blue' | 'green' | 'crimson';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  reversed?: boolean;
  category?: 'primary' | 'default' | 'text' | 'link';
  loading?: boolean;
}

const Button = ({
  children,
  icons,
  color = 'orange',
  size = 'md',
  width,
  reversed,
  category = 'primary',
  loading,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`${props.className || ''} ${
        styles[`btn-bg-${color}${reversed ? '-reversed' : ''}`]
      } ${styles[`btn-type-${category}${reversed ? '-reversed' : ''}`]} ${
        styles[`btn-size-${size}`]
      }`}
      style={{
        width: width
      }}
    >
      {loading && (
        <CircleLoading
          border={MAP_LOADING.BORDER_WIDTH[size || '']}
          width={MAP_LOADING.LOADING_WIDTH[size || '']}
          color={['gray10Color', 'gray4Color']}
        />
      )}
      {icons && icons[0] && (
        <Icon color='white' size={MAP_ICON_SIZE[size || '']} type={icons[0]} />
      )}
      {children}
      {icons && icons[1] && (
        <Icon color='white' size={MAP_ICON_SIZE[size || '']} type={icons[1]} />
      )}
    </button>
  );
};

Button.defaultProp = {
  id: '',
  className: '',
  onPress: () => {},
  size: 'lg',
  icons: [],
  color: 'orange',
  category: 'primary'
};

export default Button;

const MAP_ICON_SIZE = {
  sm: 'xs' as const,
  md: 'sm' as const,
  lg: 'sm' as const,
  xl: 'md' as const
};
const MAP_LOADING = {
  LOADING_WIDTH: {
    sm: 16,
    md: 20,
    lg: 20,
    xl: 24
  },
  BORDER_WIDTH: {
    sm: 1.5,
    md: 2,
    lg: 2,
    xl: 2.5
  }
};
