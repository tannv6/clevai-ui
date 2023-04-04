import React from 'react';
import { IconProps } from '.';

function FlagLineIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M4.77054 20C4.97075 20 5.16282 19.9233 5.30439 19.7868C5.44596 19.6502 5.5254 19.4651 5.5254 19.2721V14.6755C6.24542 14.3858 7.02175 14.2488 7.8015 14.2739C11.1142 14.2739 13.2115 15.828 16.3217 15.828C17.2183 15.8965 18.1181 15.7432 18.9361 15.3827C19.269 15.2574 19.5515 15.0324 19.7421 14.741C19.9328 14.4495 20.0216 14.1068 19.9955 13.7631V5.00426C19.9955 4.519 19.545 4.22176 18.9701 4.22176C18.0612 4.40979 17.1381 4.52629 16.2097 4.56999C13.0996 4.56999 11.0035 3.01594 7.68954 3.01594C6.79296 2.9474 5.89308 3.10065 5.07509 3.46117C4.7393 3.58687 4.45411 3.81302 4.26141 4.10647C4.06871 4.39992 3.97855 4.7452 4.00431 5.09163V19.2721C4.00888 19.4656 4.09151 19.6498 4.23453 19.7857C4.37756 19.9216 4.56976 19.9985 4.77054 20ZM16.3217 14.36C13.4141 14.36 11.2727 12.8169 7.8015 12.8169C7.03174 12.787 6.26217 12.8825 5.5254 13.0996V5.14502C5.63863 4.88419 6.31438 4.48262 7.68954 4.48262C10.7997 4.48262 12.941 6.03667 16.2097 6.03667C16.9764 6.04857 17.7414 5.96457 18.4857 5.78676V13.6977C18.3586 13.9694 17.693 14.36 16.3178 14.36H16.3217Z'
        fill={fill}
      />
    </svg>
  );
}

export default FlagLineIcon;
