import React from 'react';
import { IconProps } from '.';

function CopyLineIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M5 4.5C5 3.13281 6.09375 2 7.5 2H13.9453C14.6094 2 15.2344 2.27344 15.7031 2.74219L19.2578 6.29688C19.7266 6.76562 20 7.39063 20 8.05469V19.5C20 20.9062 18.8672 22 17.5 22H7.5C6.09375 22 5 20.9062 5 19.5V4.5ZM18.125 19.5V8.25H15C14.2969 8.25 13.75 7.70313 13.75 7V3.875H7.5C7.14844 3.875 6.875 4.1875 6.875 4.5V19.5C6.875 19.8516 7.14844 20.125 7.5 20.125H17.5C17.8125 20.125 18.125 19.8516 18.125 19.5Z'
        fill={fill}
      />
    </svg>
  );
}

export default CopyLineIcon;
