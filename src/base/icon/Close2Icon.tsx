import React from 'react';
import styles from './icon.scss';

interface Props {
  size: string;
  color: string;
  fill: string;
}

const Close2Icon = ({ size, color, fill }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 12 12'
      className={styles[size]}
    >
      <path
        className={styles[color]}
        d='M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.097631 0.683417 -0.097631 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3166 -0.097631 10.6834 -0.0976309 10.2929 0.292893L6 4.58579L1.70711 0.292893Z'
        fill={fill}
      />
    </svg>
  );
};

export default Close2Icon;
