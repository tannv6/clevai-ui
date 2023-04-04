import React from 'react';
import { IconProps } from '.';

function FileFillIcon({ className, fill }: IconProps) {
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
        d='M6 2.00006C4.89543 2.00006 4 2.89549 4 4.00006V20.0001C4 21.1046 4.89543 22.0001 6 22.0001H18C19.1046 22.0001 20 21.1046 20 20.0001V4.00006C20 2.89549 19.1046 2.00006 18 2.00006H6ZM8 11.0001C7.44772 11.0001 7 11.4478 7 12.0001C7 12.5523 7.44772 13.0001 8 13.0001H16C16.5523 13.0001 17 12.5523 17 12.0001C17 11.4478 16.5523 11.0001 16 11.0001H8ZM7 16.0001C7 15.4478 7.44772 15.0001 8 15.0001H12C12.5523 15.0001 13 15.4478 13 16.0001C13 16.5523 12.5523 17.0001 12 17.0001H8C7.44772 17.0001 7 16.5523 7 16.0001ZM8 7.00006C7.44772 7.00006 7 7.44778 7 8.00006C7 8.55235 7.44772 9.00006 8 9.00006H16C16.5523 9.00006 17 8.55235 17 8.00006C17 7.44778 16.5523 7.00006 16 7.00006H8Z'
        fill={fill}
      />
    </svg>
  );
}

export default FileFillIcon;
