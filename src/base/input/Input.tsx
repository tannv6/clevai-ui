import React from 'react';
import styles from './input.scss';

interface Props {
  size: 'xs' | 'sm' | 'md' | 'lg';
  placeholder?: string;
  onChange?: any;
  onClick?: any;
  onBlur?: any;
  onClear?: any;
  icon?: any;
  value?: string;
  textError?: string;
}

const Button = ({
  size,
  placeholder,
  onChange,
  onClick,
  onBlur,
  onClear,
  icon,
  textError,
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
      <g clipPath='url(#clip0_2227_400)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.83335 1.66666C5.15146 1.66666 2.16669 4.65143 2.16669 8.33332C2.16669 12.0152 5.15146 15 8.83335 15C10.3739 15 11.7925 14.4774 12.9214 13.5999L17.4108 18.0892C17.7362 18.4147 18.2638 18.4147 18.5893 18.0892C18.9147 17.7638 18.9147 17.2362 18.5893 16.9107L14.0999 12.4214C14.9775 11.2925 15.5 9.87392 15.5 8.33332C15.5 4.65143 12.5153 1.66666 8.83335 1.66666ZM3.83335 8.33332C3.83335 5.5719 6.07193 3.33332 8.83335 3.33332C11.5948 3.33332 13.8334 5.5719 13.8334 8.33332C13.8334 11.0947 11.5948 13.3333 8.83335 13.3333C6.07193 13.3333 3.83335 11.0947 3.83335 8.33332Z'
          fill='#B3B5B8'
        />
      </g>
      <defs>
        <clipPath id='clip0_2227_400'>
          <rect
            width='16.6667'
            height='16.6667'
            fill='white'
            transform='translate(2.16669 1.66666)'
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
      <g clipPath='url(#clip0_2227_407)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8 1.5C4.68629 1.5 2 4.18629 2 7.5C2 10.8137 4.68629 13.5 8 13.5C9.38653 13.5 10.6632 13.0297 11.6792 12.2399L15.7197 16.2803C16.0126 16.5732 16.4874 16.5732 16.7803 16.2803C17.0732 15.9874 17.0732 15.5126 16.7803 15.2197L12.7399 11.1792C13.5297 10.1632 14 8.88653 14 7.5C14 4.18629 11.3137 1.5 8 1.5ZM3.5 7.5C3.5 5.01472 5.51472 3 8 3C10.4853 3 12.5 5.01472 12.5 7.5C12.5 9.98528 10.4853 12 8 12C5.51472 12 3.5 9.98528 3.5 7.5Z'
          fill='#B3B5B8'
        />
      </g>
      <defs>
        <clipPath id='clip0_2227_407'>
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
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2230_293)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18.8333 9.99999C18.8333 14.6024 15.1023 18.3333 10.5 18.3333C5.89759 18.3333 2.16663 14.6024 2.16663 9.99999C2.16663 5.39762 5.89759 1.66666 10.5 1.66666C15.1023 1.66666 18.8333 5.39762 18.8333 9.99999ZM6.84672 6.34675C7.25352 5.93996 7.91307 5.93996 8.31986 6.34675L10.5 8.52685L12.6801 6.34675C13.0869 5.93996 13.7464 5.93996 14.1532 6.34675C14.56 6.75355 14.56 7.4131 14.1532 7.81989L11.9731 9.99999L14.1532 12.1801C14.56 12.5869 14.56 13.2464 14.1532 13.6532C13.7464 14.06 13.0869 14.06 12.6801 13.6532L10.5 11.4731L8.31986 13.6532C7.91307 14.06 7.25352 14.06 6.84672 13.6532C6.43993 13.2464 6.43993 12.5869 6.84672 12.1801L9.02682 9.99999L6.84672 7.81989C6.43993 7.4131 6.43993 6.75355 6.84672 6.34675Z'
          fill='#B3B5B8'
        />
      </g>
      <defs>
        <clipPath id='clip0_2230_293'>
          <rect
            width='16.6667'
            height='16.6667'
            fill='white'
            transform='translate(2.16663 1.66666)'
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className={`${styles['input-wrapper']} ${styles[`${size}`]}`}>
      <input
        className={`${styles['input-container']} ${styles[`${size}`]}
        ${styles[`${icon ? 'icon' : ''}`]} ${styles[`${size}`]} ${
          styles[`${textError ? 'error' : ''}`]
        }`}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        value={value}
      />
      <div className={`${styles['input-icon']} ${styles[`${size}`]}`}>
        {size === 'xs' ? icon && iconSearchSmall : icon && iconSearchBig}
      </div>
      <div
        className={`${styles['input-clear']} ${styles[`${size}`]}`}
        onClick={onClear}
      >
        {value && iconClear}
      </div>
      <div className={styles[`${textError ? 'textError' : ''}`]}>
        {textError}
      </div>
    </div>
  );
};

Button.defaultProp = {
  sm: 'md'
};

export default Button;
