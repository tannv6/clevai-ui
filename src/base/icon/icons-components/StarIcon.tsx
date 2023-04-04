import React from 'react';

interface Props {
  className: string;
  fill: string;
}

function StarIcon({ className, fill }: Props) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M12.8967 3.05743C12.7282 2.7161 12.3806 2.5 12 2.5C11.6193 2.5 11.2717 2.7161 11.1032 3.05743L8.57408 8.18205L2.91873 9.00382C2.54204 9.05855 2.2291 9.32239 2.11147 9.68441C1.99385 10.0464 2.09194 10.4438 2.36452 10.7095L6.45676 14.6985L5.49071 20.331C5.42637 20.7061 5.58059 21.0853 5.88854 21.309C6.19648 21.5328 6.60475 21.5623 6.94166 21.3851L12 18.7258L17.0583 21.3851C17.3952 21.5623 17.8034 21.5328 18.1114 21.309C18.4193 21.0853 18.5735 20.7061 18.5092 20.331L17.5432 14.6985L21.6354 10.7095C21.908 10.4438 22.0061 10.0464 21.8884 9.68441C21.7708 9.32239 21.4579 9.05855 21.0812 9.00382L15.4258 8.18205L12.8967 3.05743Z'
        fill={fill}
      />
    </svg>
  );
}

export default StarIcon;
