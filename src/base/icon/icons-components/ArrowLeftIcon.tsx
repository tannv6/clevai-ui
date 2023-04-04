import React from 'react';

interface Props {
  className: string;
  fill: string;
}

function ArrowLeftIcon({ className, fill }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 8 14'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292892 7.70711C-0.097632 7.31658 -0.0976321 6.68342 0.292892 6.29289L6.29289 0.292893C6.68342 -0.0976313 7.31658 -0.0976314 7.70711 0.292892C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071Z'
        fill={fill}
      />
    </svg>
  );
}

export default ArrowLeftIcon;
