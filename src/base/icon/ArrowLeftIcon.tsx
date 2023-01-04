import React from 'react';
import styles from './icon.scss';

interface Props {
  size: string;
  color: string;
  fill: string;
}

const ArrowLeftIcon = ({ size, color, fill }: Props) => {
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
        d='M7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292892 7.70711C-0.097632 7.31658 -0.0976321 6.68342 0.292892 6.29289L6.29289 0.292893C6.68342 -0.0976313 7.31658 -0.0976314 7.70711 0.292892C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071Z'
        fill={fill}
      />
    </svg>
  );
};

export default ArrowLeftIcon;
