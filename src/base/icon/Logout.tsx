import React from 'react';
import styles from './icon.scss';

interface Props {
  size: string;
  fill: string;
}

function Logout({ size, fill }: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={styles[size]}>
      <g clipPath='url(#clip0_4040_137069)'>
        <path
          d='M7.9219 16.6964C7.9219 17.1652 7.56349 17.5 7.13991 17.5H4.79396C3.03449 17.5 1.66602 16.0938 1.66602 14.2857V5.71429C1.66602 3.93973 3.03449 2.5 4.79396 2.5H7.13991C7.56349 2.5 7.9219 2.8683 7.9219 3.30357C7.9219 3.77232 7.56349 4.10714 7.13991 4.10714H4.79396C3.91422 4.10714 3.22999 4.84375 3.22999 5.71429V14.2857C3.22999 15.1897 3.91422 15.8929 4.79396 15.8929H7.13991C7.56349 15.8929 7.9219 16.2612 7.9219 16.6964ZM18.1203 9.46429L13.9823 4.91071C13.689 4.57589 13.2003 4.57589 12.8745 4.87723C12.5486 5.17857 12.5486 5.6808 12.8419 6.01563L15.7417 9.19643H7.62865C7.20508 9.19643 6.87925 9.56473 6.87925 10C6.87925 10.4688 7.20508 10.8036 7.62865 10.8036H15.7092L12.7767 14.0179C12.4835 14.3527 12.4835 14.8549 12.8093 15.1563C13.0048 15.2902 13.2003 15.3571 13.3632 15.3571C13.5587 15.3571 13.7542 15.2902 13.9171 15.1228L18.0551 10.5692C18.4135 10.2679 18.4135 9.76563 18.1203 9.46429Z'
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Logout;
