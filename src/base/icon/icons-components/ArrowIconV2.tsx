import React from 'react';

interface Props {
  className: string;
  fill: string;
  rotate?: 90 | 180 | 270;
}

function ArrowLeftIconV2({ className, fill, rotate }: Props) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M14.2929 18.7071C14.5789 18.9931 15.009 19.0786 15.3827 18.9238C15.7564 18.7691 16 18.4044 16 18L16 5.99997C16 5.59551 15.7564 5.23087 15.3827 5.07609C15.009 4.92131 14.5789 5.00686 14.2929 5.29286L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071Z'
        fill={fill}
        style={
          rotate && {
            transform: `rotate(${rotate}deg)`,
            transformOrigin: '50% 50%'
          }
        }
      />
    </svg>
  );
}

export default ArrowLeftIconV2;
