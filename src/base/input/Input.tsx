import React from 'react';
import styles from './input.scss';

interface Props {
  size: 'xs' | 'sm' | 'md' | 'lg';
  placeholder?: string;
  onChange: any;
  onClick?: any;
  onBlur: any;
  onClear: any;
  icon?: any;
  value: string;
}

const Button = ({
  size,
  placeholder,
  onChange,
  onClick,
  onBlur,
  onClear,
  icon,
  value
}: Props) => {
  const iconSearchBig = (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2110_575)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.83332 1.66667C5.15143 1.66667 2.16666 4.65144 2.16666 8.33334C2.16666 12.0152 5.15143 15 8.83332 15C10.3739 15 11.7925 14.4774 12.9214 13.5999L17.4107 18.0893C17.7362 18.4147 18.2638 18.4147 18.5892 18.0893C18.9147 17.7638 18.9147 17.2362 18.5892 16.9107L14.0999 12.4214C14.9774 11.2925 15.5 9.87393 15.5 8.33334C15.5 4.65144 12.5152 1.66667 8.83332 1.66667ZM3.83332 8.33334C3.83332 5.57191 6.0719 3.33334 8.83332 3.33334C11.5947 3.33334 13.8333 5.57191 13.8333 8.33334C13.8333 11.0948 11.5947 13.3333 8.83332 13.3333C6.0719 13.3333 3.83332 11.0948 3.83332 8.33334Z'
          fill='#B3B5B8'
        />
      </g>
      <defs>
        <clipPath id='clip0_2110_575'>
          <rect
            width='16.6667'
            height='16.6667'
            fill='white'
            transform='translate(2.16666 1.66667)'
          />
        </clipPath>
      </defs>
    </svg>
  );
  const iconSearchSmall = (
    <svg
      width='19'
      height='18'
      viewBox='0 0 19 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2110_438)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8 1.5C4.68629 1.5 2 4.18629 2 7.5C2 10.8137 4.68629 13.5 8 13.5C9.38653 13.5 10.6632 13.0297 11.6792 12.2399L15.7197 16.2803C16.0126 16.5732 16.4874 16.5732 16.7803 16.2803C17.0732 15.9874 17.0732 15.5126 16.7803 15.2197L12.7399 11.1792C13.5297 10.1632 14 8.88653 14 7.5C14 4.18629 11.3137 1.5 8 1.5ZM3.5 7.5C3.5 5.01472 5.51472 3 8 3C10.4853 3 12.5 5.01472 12.5 7.5C12.5 9.98528 10.4853 12 8 12C5.51472 12 3.5 9.98528 3.5 7.5Z'
          fill='#B3B5B8'
        />
      </g>
      <defs>
        <clipPath id='clip0_2110_438'>
          <rect
            width='15'
            height='15'
            fill='white'
            transform='translate(2 1.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );
  const iconClear = (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2117_317)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18.8334 10C18.8334 14.6024 15.1025 18.3333 10.5001 18.3333C5.89771 18.3333 2.16675 14.6024 2.16675 10C2.16675 5.39763 5.89771 1.66667 10.5001 1.66667C15.1025 1.66667 18.8334 5.39763 18.8334 10ZM6.84685 6.34677C7.25364 5.93997 7.91319 5.93997 8.31998 6.34677L10.5001 8.52686L12.6802 6.34677C13.087 5.93997 13.7465 5.93997 14.1533 6.34677C14.5601 6.75356 14.5601 7.41311 14.1533 7.8199L11.9732 10L14.1533 12.1801C14.5601 12.5869 14.5601 13.2464 14.1533 13.6532C13.7465 14.06 13.087 14.06 12.6802 13.6532L10.5001 11.4731L8.31998 13.6532C7.91319 14.06 7.25364 14.06 6.84685 13.6532C6.44005 13.2464 6.44005 12.5869 6.84685 12.1801L9.02694 10L6.84685 7.8199C6.44005 7.41311 6.44005 6.75356 6.84685 6.34677Z'
          fill='#B3B5B8'
        />
      </g>
      <defs>
        <clipPath id='clip0_2117_317'>
          <rect
            width='16.6667'
            height='16.6667'
            fill='white'
            transform='translate(2.16675 1.66667)'
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className={`${styles['input-wrapper']} ${styles[`${size}`]}`}>
      <input
        className={`${styles['input-container']} ${styles[`${size}`]}
        ${styles[`${icon ? 'icon' : ''}`]}`}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        value={value}
      />
      <div className={`${styles['input-icon']} ${styles[`${size}`]}`}>
        {size === 'xs' ? iconSearchSmall : iconSearchBig}
      </div>
      <div className={styles['input-clear']} onClick={onClear}>
        {value && iconClear}
      </div>
    </div>
  );
};

Button.defaultProp = {
  sm: 'md'
};

export default Button;
