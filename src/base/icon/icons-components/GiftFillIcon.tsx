import React from 'react';
import { IconProps } from '.';

function GiftFillIcon({ className, fill }: IconProps) {
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
        d='M6.15244 3.0607C7.51374 2.27934 9.24416 2.63765 10.1832 3.89535L12.0001 6.32869L13.817 3.89535C14.7561 2.63765 16.4865 2.27934 17.8478 3.0607C19.2237 3.85043 19.7813 5.54988 19.1439 7H21C21.5523 7 22 7.44772 22 8V10C22 10.5523 21.5523 11 21 11H3C2.44772 11 2 10.5523 2 10V8C2 7.44772 2.44772 7 3 7H4.8564C4.21896 5.54988 4.77656 3.85043 6.15244 3.0607ZM7.04784 7H10.0054L8.58068 5.09193C8.24691 4.64492 7.63189 4.51757 7.14805 4.79528C6.65675 5.07728 6.45901 5.68564 6.69061 6.2026L7.04784 7ZM13.9949 7H16.9524L17.3097 6.2026C17.5413 5.68564 17.3435 5.07728 16.8522 4.79528C16.3684 4.51757 15.7534 4.64492 15.4196 5.09193L13.9949 7Z'
        fill={fill}
      />
      <path d='M4 12.5H10.5V22H6C4.89543 22 4 21.1046 4 20V12.5Z' fill={fill} />
      <path
        d='M20 12.5H13.5V22H18C19.1046 22 20 21.1046 20 20V12.5Z'
        fill={fill}
      />
    </svg>
  );
}

export default GiftFillIcon;
