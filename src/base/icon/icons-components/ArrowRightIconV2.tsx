import React from 'react';
import styles from '../icon.scss';

interface Props {
  size: string;
  fill: string;
}

function ArrowRightIcon({ size, fill }: Props) {
  return (
    <svg
      width='8'
      height='14'
      viewBox='0 0 8 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles[size]}
    >
      <path
        d='M1.70711 0.292922C1.42111 0.00692445 0.990991 -0.0786313 0.617317 0.0761497C0.243642 0.230931 0 0.595567 0 1.00003V13C0 13.4045 0.243642 13.7691 0.617317 13.9239C0.990991 14.0787 1.42111 13.9931 1.70711 13.7071L7.70711 7.70714C8.09763 7.31661 8.09763 6.68345 7.70711 6.29292L1.70711 0.292922Z'
        fill={fill}
      />
    </svg>
  );
}

export default ArrowRightIcon;
