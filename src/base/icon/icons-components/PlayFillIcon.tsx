import React from 'react';
import { IconProps } from '.';

function PlayFillIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5ZM10.53 16.5438L15.6432 13.348C16.2699 12.9563 16.2699 12.0437 15.6432 11.652L10.53 8.45625C9.86395 8.03997 9 8.51881 9 9.30425L9 15.6958C9 16.4812 9.86395 16.96 10.53 16.5438Z'
        fill={fill}
      />
    </svg>
  );
}

export default PlayFillIcon;
