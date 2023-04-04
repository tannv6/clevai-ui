import React from 'react';

interface Props {
  className: string;
  fill: string;
}

function ChestnutIcon({ className, fill }: Props) {
  return (
    <svg
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M18.8842 4.91896H15.4988V3.16463C15.4992 3.05535 15.477 2.94707 15.4334 2.84603C15.3899 2.74499 15.3258 2.65319 15.2449 2.57591C15.1639 2.49864 15.0678 2.43743 14.962 2.3958C14.8562 2.35418 14.7428 2.33296 14.6284 2.33338H13.6619C13.5475 2.33296 13.4341 2.35418 13.3283 2.3958C13.2225 2.43743 13.1264 2.49864 13.0455 2.57591C12.9646 2.65319 12.9005 2.74499 12.8569 2.84603C12.8133 2.94707 12.7911 3.05535 12.7915 3.16463V4.91896H9.21383C8.61662 4.91813 8.02511 5.02985 7.47317 5.24774C6.92126 5.46563 6.41978 5.78539 5.99748 6.1887C5.57518 6.59202 5.24037 7.07094 5.01223 7.59805C4.78409 8.12518 4.6671 8.69009 4.66798 9.26046V10.3688C4.66754 10.4781 4.68975 10.5864 4.73334 10.6874C4.77692 10.7884 4.84102 10.8802 4.92193 10.9575C5.00284 11.0348 5.09896 11.096 5.20476 11.1376C5.31055 11.1793 5.42393 11.2005 5.53835 11.2H22.4618C22.5762 11.2005 22.6896 11.1793 22.7954 11.1376C22.9012 11.096 22.9973 11.0348 23.0782 10.9575C23.1591 10.8802 23.2233 10.7884 23.2669 10.6874C23.3105 10.5864 23.3327 10.4781 23.3322 10.3688V9.26046C23.3519 8.69313 23.2511 8.12785 23.0358 7.59875C22.8206 7.06965 22.4953 6.5877 22.0795 6.18197C21.6639 5.77624 21.1664 5.45514 20.6172 5.23808C20.068 5.021 19.4785 4.91245 18.8842 4.91896ZM22.5596 12.7691H5.53835V15.2645C5.53275 17.5304 6.39482 19.7201 7.96221 21.4211C9.52959 23.1222 11.6941 24.2173 14.0482 24.5C16.4022 24.2173 18.5667 23.1222 20.1341 21.4211C21.7015 19.7201 22.5636 17.5304 22.558 15.2645L22.5596 12.7691Z'
        fill={fill}
      />
    </svg>
  );
}

export default ChestnutIcon;
