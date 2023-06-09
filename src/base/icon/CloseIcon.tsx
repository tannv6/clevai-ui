import React from 'react';
import styles from './icon.scss';

interface Props {
  size: string;
  color: string;
  fill: string;
}

const CloseIcon = ({ size, color, fill }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      className={styles[size]}
    >
      <path
        className={styles[color]}
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM5.61612 5.61612C6.10427 5.12796 6.89573 5.12796 7.38388 5.61612L10 8.23223L12.6161 5.61612C13.1043 5.12796 13.8957 5.12796 14.3839 5.61612C14.872 6.10427 14.872 6.89573 14.3839 7.38388L11.7678 10L14.3839 12.6161C14.872 13.1043 14.872 13.8957 14.3839 14.3839C13.8957 14.872 13.1043 14.872 12.6161 14.3839L10 11.7678L7.38388 14.3839C6.89573 14.872 6.10427 14.872 5.61612 14.3839C5.12796 13.8957 5.12796 13.1043 5.61612 12.6161L8.23223 10L5.61612 7.38388C5.12796 6.89573 5.12796 6.10427 5.61612 5.61612Z'
        fill={fill}
      />
    </svg>
  );
};

export default CloseIcon;
