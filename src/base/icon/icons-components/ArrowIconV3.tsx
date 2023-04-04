import React from 'react';

interface Props {
  className: string;
  fill: string;
  rotate?: 90 | 180 | 270;
}

function ArrowLeftIconV3({ className, fill, rotate }: Props) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M7 18.6175C7 18.7425 7.03125 18.8362 7.09375 18.8986C7.15625 18.9611 7.25 18.9923 7.375 18.9923H8.875C8.96875 18.9923 9.0625 18.9611 9.125 18.8986C9.1875 18.8362 9.25 18.7425 9.25 18.6175V13.1518L15.375 18.7737C15.5625 18.9611 15.7812 19.0236 16.0312 18.9923C16.2812 18.9923 16.5312 18.8674 16.7187 18.68C16.9062 18.4926 17 18.274 17 17.9929V5.99945C17 5.74959 16.9062 5.49973 16.7187 5.31233C16.5312 5.12493 16.2812 5.03123 16.0312 5C15.7812 5 15.5625 5.06247 15.375 5.21863L9.25 10.8718V5.37479C9.25 5.2811 9.1875 5.1874 9.125 5.12493C9.0625 5.06247 8.96875 5 8.875 5H7.375C7.25 5 7.15625 5.06247 7.09375 5.12493C7.03125 5.1874 7 5.2811 7 5.37479V18.6175Z'
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

export default ArrowLeftIconV3;
