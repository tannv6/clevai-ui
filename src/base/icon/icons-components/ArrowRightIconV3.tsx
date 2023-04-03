import React from 'react';
import styles from '../icon.scss';

interface Props {
  size: string;
  color: string;
  fill: string;
}

function ArrowRightIconV3({ size, color, fill }: Props) {
  return (
    <svg
      width='10'
      height='14'
      viewBox='0 0 10 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles[size]}
    >
      <path
        className={styles[color]}
        d='M10 0.374795C10 0.281096 9.9375 0.187397 9.875 0.124932C9.8125 0.0624658 9.71875 0 9.625 0H8.125C8 0 7.90625 0.0624658 7.84375 0.124932C7.78125 0.187397 7.75 0.281096 7.75 0.374795V5.84055L1.65625 0.21863C1.4375 0.0624658 1.1875 0 0.9375 0C0.6875 0.0312329 0.46875 0.124932 0.28125 0.312329C0.09375 0.499726 0 0.749589 0 0.999452V12.9929C0 13.274 0.09375 13.4926 0.28125 13.68C0.46875 13.8674 0.6875 13.9923 0.9375 13.9923C1.1875 14.0236 1.4375 13.9611 1.65625 13.7737L7.75 8.12055V13.6175C7.75 13.7425 7.78125 13.8362 7.84375 13.8986C7.90625 13.9611 8 13.9923 8.125 13.9923H9.625C9.71875 13.9923 9.8125 13.9611 9.875 13.8986C9.9375 13.8362 10 13.7425 10 13.6175V0.374795Z'
        fill={fill}
      />
    </svg>
  );
}

export default ArrowRightIconV3;
