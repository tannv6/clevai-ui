import React from 'react';
import { IconProps } from '.';

function SendFillIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M21.3865 11.5889L3.59493 3.53838C2.7702 3.1652 1.91359 3.99244 2.25778 4.82968L4.99997 11.5L17 12.5L4.99997 13.5L2.25778 20.1702C1.91359 21.0075 2.77019 21.8347 3.59492 21.4615L21.3865 13.411C22.1702 13.0564 22.1702 11.9435 21.3865 11.5889Z'
        fill={fill}
      />
    </svg>
  );
}

export default SendFillIcon;
