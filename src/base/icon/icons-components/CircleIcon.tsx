import React from 'react';

interface Props {
  className: string;
  fill: string;
}

function CircleIcon({ className, fill }: Props) {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle cx='100' cy='100' r='90' stroke={fill} stroke-width='20' />
    </svg>
  );
}

export default CircleIcon;
