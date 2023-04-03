import React from 'react';
import styles from '../icon.scss';

interface Props {
  size: string;
  color: string;
  fill: string;
}

function ArrowLeftIconV3({ size, color, fill }: Props) {
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
        d='M0 13.6175C0 13.7425 0.03125 13.8362 0.09375 13.8986C0.15625 13.9611 0.25 13.9923 0.375 13.9923H1.875C1.96875 13.9923 2.0625 13.9611 2.125 13.8986C2.1875 13.8362 2.25 13.7425 2.25 13.6175V8.15178L8.375 13.7737C8.5625 13.9611 8.78125 14.0236 9.03125 13.9923C9.28125 13.9923 9.53125 13.8674 9.71875 13.68C9.90625 13.4926 10 13.274 10 12.9929V0.999452C10 0.749589 9.90625 0.499726 9.71875 0.312329C9.53125 0.124932 9.28125 0.0312329 9.03125 0C8.78125 0 8.5625 0.0624658 8.375 0.21863L2.25 5.87178V0.374795C2.25 0.281096 2.1875 0.187397 2.125 0.124932C2.0625 0.0624658 1.96875 0 1.875 0H0.375C0.25 0 0.15625 0.0624658 0.09375 0.124932C0.03125 0.187397 0 0.281096 0 0.374795V13.6175Z'
        fill={fill}
      />
    </svg>
  );
}

export default ArrowLeftIconV3;