import React from 'react';
import { IconProps } from '.';

function HeartFillIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M3.79293 4.79293C6.04863 2.53724 9.66491 2.47139 12 4.59539C14.3352 2.47139 17.9515 2.53724 20.2071 4.79293C22.5307 7.11645 22.5307 10.8836 20.2071 13.2071L12.7071 20.7071C12.3166 21.0977 11.6835 21.0977 11.2929 20.7071L3.79293 13.2071C1.46941 10.8836 1.46941 7.11645 3.79293 4.79293Z'
        fill={fill}
      />
    </svg>
  );
}

export default HeartFillIcon;
