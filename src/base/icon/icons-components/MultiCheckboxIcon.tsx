import React from 'react';

interface Props {
  className: string;
  fill: string;
}

function MultiCheckboxIcon({ className, fill }: Props) {
  return (
    <svg
      viewBox='0 0 14 14'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M11.667 7.00001C11.667 7.3682 11.3685 7.66668 11.0003 7.66668L3.00033 7.66668C2.63214 7.66668 2.33366 7.3682 2.33366 7.00001C2.33366 6.63182 2.63214 6.33334 3.00033 6.33334L11.0003 6.33334C11.3685 6.33334 11.667 6.63182 11.667 7.00001Z'
        fill={fill}
      />
    </svg>
  );
}

export default MultiCheckboxIcon;
