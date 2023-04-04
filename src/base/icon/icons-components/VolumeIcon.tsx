import React from 'react';
import { IconProps } from '.';

function VolumeIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M13.4371 2.10061C13.7814 2.26796 14 2.61719 14 3.00001V21C14 21.3828 13.7814 21.7321 13.4371 21.8994C13.0928 22.0667 12.6832 22.0228 12.3822 21.7863L6.2905 17H3C2.44772 17 2 16.5523 2 16V8.00001C2 7.44772 2.44772 7.00001 3 7.00001H6.2905L12.3822 2.21369C12.6832 1.97717 13.0928 1.93327 13.4371 2.10061Z'
        fill={fill}
      />
      <path
        d='M18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289C16.9024 5.68342 16.9024 6.31658 17.2929 6.70711L17.636 7.05025C20.3697 9.78392 20.3697 14.2161 17.636 16.9497L17.2929 17.2929C16.9024 17.6834 16.9024 18.3166 17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071L19.0503 18.364C22.565 14.8492 22.565 9.15076 19.0503 5.63604L18.7071 5.29289Z'
        fill={fill}
      />
      <path
        d='M16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289C14.9024 8.68342 14.9024 9.31658 15.2929 9.70711L15.4645 9.87868C16.636 11.0503 16.636 12.9497 15.4645 14.1213L15.2929 14.2929C14.9024 14.6834 14.9024 15.3166 15.2929 15.7071C15.6834 16.0976 16.3166 16.0976 16.7071 15.7071L16.8787 15.5355C18.8313 13.5829 18.8313 10.4171 16.8787 8.46447L16.7071 8.29289Z'
        fill={fill}
      />
    </svg>
  );
}

export default VolumeIcon;
