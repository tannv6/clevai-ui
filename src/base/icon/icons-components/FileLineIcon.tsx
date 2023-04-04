import React from 'react';
import { IconProps } from '.';

function FileLineIcon({ className, fill }: IconProps) {
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
        d='M4 4.00006C4 2.89549 4.89543 2.00006 6 2.00006H18C19.1046 2.00006 20 2.89549 20 4.00006V20.0001C20 21.1046 19.1046 22.0001 18 22.0001H6C4.89543 22.0001 4 21.1046 4 20.0001V4.00006ZM18 4.00006L6 4.00006V20.0001H18V4.00006Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8 12.0001C8 11.4478 8.44772 11.0001 9 11.0001H15C15.5523 11.0001 16 11.4478 16 12.0001C16 12.5523 15.5523 13.0001 15 13.0001H9C8.44772 13.0001 8 12.5523 8 12.0001Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8 16.0001C8 15.4478 8.44772 15.0001 9 15.0001H12C12.5523 15.0001 13 15.4478 13 16.0001C13 16.5523 12.5523 17.0001 12 17.0001H9C8.44772 17.0001 8 16.5523 8 16.0001Z'
        fill={fill}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8 8.00006C8 7.44778 8.44772 7.00006 9 7.00006H15C15.5523 7.00006 16 7.44778 16 8.00006C16 8.55235 15.5523 9.00006 15 9.00006H9C8.44772 9.00006 8 8.55235 8 8.00006Z'
        fill={fill}
      />
    </svg>
  );
}

export default FileLineIcon;
