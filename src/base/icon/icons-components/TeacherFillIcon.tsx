import React from 'react';
import { IconProps } from '.';

function TeacherFillIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M7 6C7 4.90625 7.875 4 9 4H20C21.0938 4 22 4.90625 22 6V15C22 16.125 21.0938 17 20 17H12.5C12.1562 16.2188 11.5625 15.5312 10.875 15H14V14C14 13.4688 14.4375 13 15 13H17C17.5312 13 18 13.4688 18 14V15H20V6H9V7.5625C8.40625 7.21875 7.71875 7 7 7V6ZM7 14C5.34375 14 4 12.6562 4 11C4 9.34375 5.34375 8 7 8C8.65625 8 10 9.34375 10 11C10 12.6562 8.65625 14 7 14ZM6.15625 15H7.8125C10.125 15 12 16.875 12 19.1875C12 19.625 11.625 20 11.1562 20H2.8125C2.34375 20 2 19.6562 2 19.1875C2 16.875 3.84375 15 6.15625 15Z'
        fill={fill}
      />
    </svg>
  );
}

export default TeacherFillIcon;
