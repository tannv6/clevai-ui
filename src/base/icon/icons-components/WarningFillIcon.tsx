import React from 'react';
import { IconProps } from '.';

function WarningFillIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 13.25C12.6904 13.25 13.25 12.6904 13.25 12V7C13.25 6.30964 12.6904 5.75 12 5.75C11.3096 5.75 10.75 6.30964 10.75 7V12C10.75 12.6904 11.3096 13.25 12 13.25ZM13.5 16.5C13.5 15.6716 12.8284 15 12 15C11.1716 15 10.5 15.6716 10.5 16.5C10.5 17.3284 11.1716 18 12 18C12.8284 18 13.5 17.3284 13.5 16.5Z'
        fill={fill}
      />
    </svg>
  );
}

export default WarningFillIcon;
