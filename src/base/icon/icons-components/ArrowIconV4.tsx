import React from 'react';
import { IconProps } from '.';

function ArrowIconV4({ className, fill, rotate }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.3465 11.9845C17.3465 12.239 17.2399 12.4762 17.0267 12.6962L13.3031 16.3889C13.1175 16.5539 12.9146 16.6364 12.6946 16.6364C12.4608 16.6364 12.2614 16.5573 12.0963 16.3992C11.9313 16.2341 11.8488 16.0313 11.8488 15.7906C11.8488 15.5499 11.9382 15.3471 12.117 15.182L13.4682 13.8515L14.7678 12.7787L12.447 12.8716L6.86684 12.8716C6.61241 12.8716 6.40268 12.7891 6.23765 12.624C6.07261 12.459 5.99353 12.2493 6.00041 11.9948C6.00041 11.7335 6.07949 11.5204 6.23765 11.3553C6.40268 11.1903 6.61241 11.1078 6.86684 11.1078L12.447 11.1078L14.7575 11.2006L13.4682 10.1279L12.117 8.79731C11.9382 8.63228 11.8488 8.42943 11.8488 8.18875C11.8488 7.94808 11.9279 7.74866 12.086 7.59051C12.2511 7.43235 12.4539 7.35327 12.6946 7.35327C12.9421 7.35327 13.145 7.43235 13.3031 7.59051L17.0267 11.2934C17.2399 11.4997 17.3465 11.7301 17.3465 11.9845Z'
        fill={fill}
        style={
          rotate && {
            transform: `rotate(${rotate}deg)`,
            transformOrigin: '50% 50%'
          }
        }
      />
    </svg>
  );
}

export default ArrowIconV4;
