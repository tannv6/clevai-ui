import React from 'react';
import { IconProps } from '.';

function SmileLineIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M12 22C13.9778 22 15.9112 21.4136 17.5557 20.3147C19.2002 19.2159 20.4818 17.6541 21.2387 15.8268C21.9956 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10925 20.4696 6.32742 19.0711 4.92889C17.6725 3.53036 15.8906 2.578 13.9508 2.19215C12.011 1.80629 10.0003 2.00435 8.17309 2.76122C6.34583 3.5181 4.78414 4.79983 3.68533 6.44432C2.58652 8.08882 2 10.0222 2 12C2.02252 14.6452 3.08329 17.1757 4.95379 19.0462C6.8243 20.9167 9.3548 21.9775 12 22ZM12 20.1163C10.3947 20.1163 8.82558 19.6402 7.49087 18.7484C6.15616 17.8566 5.11582 16.589 4.50152 15.106C3.88722 13.6229 3.72647 11.991 4.03964 10.4166C4.35281 8.84217 5.12578 7.39599 6.26086 6.26091C7.39594 5.12583 8.84219 4.35285 10.4166 4.03968C11.991 3.72652 13.6229 3.88727 15.1059 4.50157C16.589 5.11587 17.8565 6.15614 18.7483 7.49085C19.6402 8.82556 20.1163 10.3947 20.1163 12C20.1228 13.0676 19.9172 14.126 19.5116 15.1136C19.106 16.1013 18.5084 16.9985 17.7535 17.7535C16.9985 18.5084 16.1012 19.1061 15.1135 19.5117C14.1259 19.9173 13.0676 20.1228 12 20.1163ZM9.18749 11.1575C9.4429 11.1958 9.70395 11.155 9.93548 11.0406C10.167 10.9262 10.3579 10.7436 10.4827 10.5174C10.6074 10.2913 10.6598 10.0324 10.6331 9.77555C10.6064 9.51868 10.5017 9.27613 10.3331 9.08051C10.1645 8.8849 9.94009 8.74564 9.68996 8.68134C9.43984 8.61704 9.17595 8.63082 8.93389 8.72086C8.69184 8.8109 8.4832 8.97283 8.3359 9.18496C8.1886 9.39709 8.10971 9.64928 8.10992 9.90754C8.09765 10.0606 8.11597 10.2144 8.16363 10.3603C8.21129 10.5063 8.2874 10.6413 8.38763 10.7575C8.48785 10.8738 8.61013 10.969 8.74743 11.0377C8.88473 11.1063 9.03434 11.1471 9.18749 11.1575ZM14.8625 11.1575C15.1179 11.1958 15.3788 11.155 15.6104 11.0406C15.8419 10.9262 16.033 10.7436 16.1577 10.5174C16.2824 10.2913 16.3349 10.0324 16.3082 9.77555C16.2814 9.51868 16.1768 9.27613 16.0082 9.08051C15.8395 8.8849 15.615 8.74564 15.3649 8.68134C15.1147 8.61704 14.851 8.63082 14.6089 8.72086C14.3669 8.8109 14.1582 8.97283 14.0109 9.18496C13.8636 9.39709 13.7848 9.64928 13.785 9.90754C13.7727 10.0606 13.7909 10.2144 13.8385 10.3603C13.8862 10.5063 13.9624 10.6413 14.0627 10.7575C14.1629 10.8738 14.2852 10.969 14.4225 11.0377C14.5598 11.1063 14.7094 11.1471 14.8625 11.1575ZM8.5425 14.8875C8.5425 15.5562 9.92998 16.92 11.9875 16.92C14.045 16.92 15.445 15.5575 15.445 14.8875C15.445 14.6375 15.1949 14.5125 14.9449 14.615C14.0439 15.1267 13.0255 15.3958 11.9893 15.3958C10.9531 15.3958 9.9347 15.1267 9.03368 14.615C8.79118 14.515 8.5425 14.6387 8.5425 14.8875Z'
        fill={fill}
      />
    </svg>
  );
}

export default SmileLineIcon;
