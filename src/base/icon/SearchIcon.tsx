import React from 'react';
import styles from './icon.scss';

interface Props {
  size: string;
  fill: string;
  color: string;
}

function SearchIcon({ size, fill, color }: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={styles[size]}>
      <path
        className={styles[color]}
        d='M7.7 0C3.72355 0 0.5 3.22355 0.5 7.2C0.5 11.1764 3.72355 14.4 7.7 14.4C9.36384 14.4 10.8959 13.8356 12.1151 12.8879L16.9636 17.7364C17.3151 18.0879 17.8849 18.0879 18.2364 17.7364C18.5879 17.3849 18.5879 16.8151 18.2364 16.4636L13.3879 11.6151C14.3356 10.3959 14.9 8.86384 14.9 7.2C14.9 3.22355 11.6764 0 7.7 0ZM2.3 7.2C2.3 4.21766 4.71766 1.8 7.7 1.8C10.6823 1.8 13.1 4.21766 13.1 7.2C13.1 10.1823 10.6823 12.6 7.7 12.6C4.71766 12.6 2.3 10.1823 2.3 7.2Z'
        fill={fill}
      />
    </svg>
  );
}

export default SearchIcon;
