import React from 'react';
import styles from './icon.scss';

interface Props {
  size: string;
  color: string;
  fill: string;
}

const GiftIcon = ({ size, color, fill }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 18 19'
      className={styles[size]}
    >
      <path
        className={styles[color]}
        d='M4.09307 18.6484H13.2531C13.6163 18.6979 13.986 18.6635 14.3338 18.5479C14.6816 18.4323 14.9984 18.2386 15.2597 17.9816C15.521 17.7246 15.7201 17.4111 15.8415 17.0653C15.9629 16.7194 16.0034 16.3504 15.96 15.9864V10.8574H15.982C16.3616 10.7536 16.6915 10.5171 16.9117 10.1909C17.1319 9.86465 17.2278 9.47027 17.1821 9.07936V6.6794C17.2127 6.43598 17.1889 6.18877 17.1122 5.95571C17.0356 5.72264 16.9081 5.50954 16.7389 5.3318C16.5698 5.15407 16.3633 5.01616 16.1343 4.92806C15.9054 4.83995 15.6597 4.80388 15.4151 4.82241H13.9051C14.3406 4.33367 14.5761 3.69892 14.565 3.04439C14.5634 2.63386 14.4792 2.22785 14.3173 1.8506C14.1554 1.47336 13.9191 1.13263 13.6226 0.848712C13.3261 0.564791 12.9754 0.34348 12.5915 0.198077C12.2076 0.0526734 11.7982 -0.0138595 11.388 0.00239811C11.1656 0.538571 10.7894 0.996794 10.3067 1.31917C9.82399 1.64155 9.25654 1.81362 8.67608 1.81362C8.09562 1.81362 7.52817 1.64155 7.04546 1.31917C6.56276 0.996794 6.18642 0.538571 5.96404 0.00239811C5.55412 -0.012881 5.14533 0.0543826 4.7619 0.200152C4.37847 0.345921 4.02823 0.567229 3.73199 0.85097C3.43575 1.13471 3.19956 1.47509 3.03741 1.85189C2.87526 2.22868 2.79041 2.63419 2.78802 3.04439C2.7807 3.70025 3.02023 4.33491 3.45904 4.82241H1.94903C1.7058 4.80958 1.46268 4.84959 1.23638 4.93965C1.01008 5.02972 0.806014 5.16768 0.638116 5.34413C0.470218 5.52058 0.342448 5.73132 0.263726 5.96181C0.185004 6.1923 0.157179 6.43711 0.182061 6.6794V9.07936C0.136306 9.47027 0.232148 9.86465 0.452325 10.1909C0.672502 10.5171 1.00237 10.7536 1.38201 10.8574H1.393V15.9914C1.35069 16.3543 1.39185 16.7221 1.51324 17.0667C1.63463 17.4113 1.83314 17.7237 2.09356 17.9799C2.35398 18.2362 2.66941 18.4296 3.01592 18.5455C3.36244 18.6613 3.73089 18.6965 4.09307 18.6484ZM7.90704 4.81337H6.45306C5.12206 4.81337 4.3731 4.04142 4.3731 3.14742C4.36641 2.92831 4.4068 2.71028 4.49175 2.5082C4.5767 2.30611 4.70418 2.12468 4.86541 1.97615C5.02664 1.82763 5.21796 1.71553 5.42632 1.64742C5.63469 1.57931 5.85523 1.55676 6.07305 1.58138C6.32673 1.58042 6.57781 1.63212 6.81048 1.73323C7.04314 1.83434 7.25235 1.98267 7.42474 2.16878C7.59713 2.35489 7.72892 2.57476 7.81194 2.81447C7.89497 3.05418 7.92738 3.30855 7.90704 3.56142V4.81337ZM9.43902 4.81337V3.55739C9.41889 3.30358 9.45184 3.04835 9.5357 2.80794C9.61956 2.56753 9.75258 2.3472 9.9262 2.16097C10.0998 1.97474 10.3103 1.82669 10.5442 1.72621C10.7782 1.62574 11.0305 1.57509 11.2851 1.57741C11.5028 1.55364 11.723 1.57674 11.931 1.64516C12.139 1.71358 12.3299 1.82573 12.4909 1.97408C12.6519 2.12243 12.7793 2.30351 12.8646 2.50521C12.9498 2.7069 12.9909 2.92451 12.985 3.14339C12.985 4.03839 12.2361 4.8094 10.9051 4.8094L9.43902 4.81337ZM7.85101 9.4214H2.38201C1.94601 9.4214 1.789 9.26439 1.789 8.82839V6.89339C1.789 6.45739 1.94501 6.31142 2.38201 6.31142H7.85101V9.4214ZM9.50604 9.4214V6.3124H14.986C15.422 6.3124 15.5561 6.45737 15.5561 6.89437V8.82936C15.5561 9.26536 15.422 9.42238 14.986 9.42238L9.50604 9.4214ZM7.85101 17.1384H4.0711C3.92673 17.1542 3.7806 17.1372 3.64373 17.0886C3.50686 17.0401 3.38269 16.9612 3.28057 16.8579C3.17846 16.7547 3.10103 16.6297 3.05401 16.4923C3.00699 16.3549 2.99165 16.2086 3.00909 16.0644V10.9194H7.85211L7.85101 17.1384ZM9.50604 17.1384V10.9204H14.3491V16.0654C14.366 16.2105 14.3499 16.3576 14.3019 16.4957C14.254 16.6337 14.1754 16.7591 14.0721 16.8624C13.9687 16.9658 13.8434 17.0443 13.7054 17.0923C13.5673 17.1403 13.4202 17.1564 13.2751 17.1394L9.50604 17.1384Z'
        fill={fill}
      />
    </svg>
  );
};

export default GiftIcon;
