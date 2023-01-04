import React from 'react';
import styles from './icon.scss';

interface Props {
  size: string;
  color: string;
  fill: string;
}

const ArrowRightIcon = ({ size, color, fill }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 8 14'
      className={styles[size]}
    >
      <path
        className={styles[color]}
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z'
        fill={fill}
      />
    </svg>
  );
};

export default ArrowRightIcon;
