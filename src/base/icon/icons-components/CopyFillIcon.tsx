import React from 'react';
import { IconProps } from '.';

function CopyFillIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M5 4.5C5 3.13281 6.09375 2 7.5 2H13.75V7C13.75 7.70313 14.2969 8.25 15 8.25H20V19.5C20 20.9062 18.8672 22 17.5 22H7.5C6.09375 22 5 20.9062 5 19.5V4.5ZM20 7H15V2L20 7Z'
        fill={fill}
      />
    </svg>
  );
}

export default CopyFillIcon;
