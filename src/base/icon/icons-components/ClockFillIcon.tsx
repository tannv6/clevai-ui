import React from 'react';
import { IconProps } from '.';

function ClockFillIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M17.5557 20.3147C15.9112 21.4135 13.9778 22 12 22C9.3565 21.972 6.82923 20.9094 4.9599 19.0401C3.09056 17.1708 2.02797 14.6435 2 12C2 10.0222 2.58652 8.08879 3.68533 6.44431C4.78414 4.79982 6.34583 3.5181 8.17309 2.76122C10.0003 2.00435 12.011 1.80629 13.9508 2.19215C15.8906 2.578 17.6725 3.53044 19.0711 4.92896C20.4696 6.32748 21.422 8.1093 21.8079 10.0491C22.1937 11.9889 21.9956 13.9996 21.2387 15.8268C20.4818 17.6541 19.2002 19.2159 17.5557 20.3147Z'
        fill={fill}
      />
      <path
        d='M11.9999 12.9865H7.5461V12.9821C7.36439 12.9821 7.19009 12.9098 7.0616 12.7813C6.93311 12.6529 6.86096 12.4786 6.86096 12.2969C6.86096 12.1152 6.93311 11.941 7.0616 11.8125C7.19009 11.684 7.36439 11.6118 7.5461 11.6118H11.3148V6.56392C11.3148 6.38221 11.387 6.20798 11.5155 6.07949C11.6439 5.951 11.8182 5.87878 11.9999 5.87878C12.1817 5.87878 12.356 5.951 12.4844 6.07949C12.6129 6.20798 12.6851 6.38221 12.6851 6.56392V12.3015C12.6864 12.3918 12.6696 12.4815 12.6356 12.5652C12.6017 12.6489 12.5514 12.725 12.4875 12.7889C12.4236 12.8528 12.3475 12.9032 12.2638 12.9371C12.18 12.9711 12.0903 12.9879 11.9999 12.9865Z'
        fill='white'
      />
    </svg>
  );
}

export default ClockFillIcon;
