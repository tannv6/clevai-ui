import React from 'react';

interface Props {
  className: string;
  fill: string;
}

function ArrowLeftIconV2({ className, fill }: Props) {
  return (
    <svg
      width='8'
      height='14'
      viewBox='0 0 8 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M6.29289 13.7071C6.57889 13.9931 7.00901 14.0786 7.38268 13.9238C7.75636 13.7691 8 13.4044 8 13L8 0.999968C8 0.595507 7.75636 0.23087 7.38268 0.0760888C7.00901 -0.0786925 6.57889 0.00686353 6.29289 0.292862L0.292893 6.29286C-0.0976311 6.68339 -0.0976311 7.31655 0.292893 7.70708L6.29289 13.7071Z'
        fill={fill}
      />
    </svg>
  );
}

export default ArrowLeftIconV2;
