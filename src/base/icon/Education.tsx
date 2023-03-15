import React from 'react';
import styles from './icon.scss';

interface Props {
  size: string;
  fill: string;
}
function Education({ size, fill }: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={styles[size]}>
      <g clipPath='url(#clip0_4040_137061)'>
        <path
          d='M17.89 6.90137L10.5202 4.27116C10.3639 4.21908 10.1816 4.16699 9.99935 4.16699C9.79102 4.16699 9.60873 4.21908 9.42643 4.27116L2.08268 6.90137C1.82227 7.00553 1.66602 7.23991 1.66602 7.50033C1.66602 7.78678 1.82227 8.02116 2.08268 8.12533L3.64518 8.6722C3.33268 9.08887 3.09831 9.55762 2.99414 10.0785C2.70768 10.2087 2.49935 10.4951 2.49935 10.8337C2.49935 11.0941 2.60352 11.3285 2.78581 11.4847L2.16081 15.3649C2.10872 15.6253 2.31706 15.8337 2.55143 15.8337H4.08789C4.32227 15.8337 4.5306 15.6253 4.47852 15.3649L3.85352 11.4847C4.03581 11.3285 4.16602 11.0941 4.16602 10.8337C4.16602 10.5732 4.00977 10.3389 3.82747 10.2087C3.93164 9.73991 4.16602 9.32324 4.47852 8.9847L9.42643 10.7555C9.60873 10.8076 9.79102 10.8337 9.99935 10.8337C10.1816 10.8337 10.3639 10.8076 10.5462 10.7555L17.89 8.12533C18.1504 8.02116 18.3327 7.78678 18.3327 7.50033C18.3327 7.23991 18.1504 7.00553 17.89 6.90137ZM10.1296 9.58366C9.99935 9.6097 9.89518 9.58366 9.86914 9.58366L6.22331 8.28158L10.1035 7.08366C10.3379 7.00553 10.4421 6.77116 10.39 6.56283C10.3118 6.32845 10.0775 6.19824 9.86914 6.27637L4.92122 7.81283L4.08789 7.50033L9.8431 5.44303C9.94727 5.41699 10.0514 5.44303 10.1035 5.44303L15.8848 7.50033L10.1296 9.58366ZM13.4369 10.5993L13.7494 13.516C13.7494 13.8024 12.4473 14.5837 9.99935 14.5837C7.52539 14.5837 6.24935 13.8024 6.24935 13.516L6.53581 10.5993L5.33789 10.1826L4.99935 13.4639C4.99935 15.0524 7.49935 15.8337 9.99935 15.8337C12.4733 15.8337 14.9994 15.0524 14.9733 13.4639L14.6348 10.1826L13.4369 10.5993Z'
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Education;
