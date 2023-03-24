import React from 'react';
import styles from './icon.scss';

interface Props {
  size: string;
  color: string;
  fill: string;
}

const TickIcon = ({ size, color, fill }: Props) => {
  return (
    <svg
      viewBox='0 0 14 14'
      xmlns='http://www.w3.org/2000/svg'
      className={styles[size]}
    >
      <path
        className={styles[color]}
        d='M12.1384 3.19526C12.3987 3.45561 12.3987 3.87772 12.1384 4.13807L6.1384 10.1381C5.87805 10.3984 5.45594 10.3984 5.19559 10.1381L1.86225 6.80474C1.6019 6.54439 1.6019 6.12228 1.86225 5.86193C2.1226 5.60158 2.54471 5.60158 2.80506 5.86193L5.66699 8.72386L11.1956 3.19526C11.4559 2.93491 11.878 2.93491 12.1384 3.19526Z'
        fill={fill}
      />
    </svg>
  );
};

export default TickIcon;
