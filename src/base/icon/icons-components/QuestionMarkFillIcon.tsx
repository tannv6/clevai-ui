import React from 'react';
import { IconProps } from '.';

function QuestionMarkFillIcon({ className, fill }: IconProps) {
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
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.4519 8.87521C12.0404 8.76783 11.5398 8.87439 11.2071 9.2071C10.8166 9.59762 10.1834 9.59762 9.79289 9.2071C9.40237 8.81657 9.40237 8.18341 9.79289 7.79288C10.6718 6.91397 11.9213 6.66981 12.9568 6.93999C14.0217 7.2178 15 8.09936 15 9.49999C15 10.6724 14.2263 11.4412 13.7707 11.8938L13.7071 11.9571C13.1498 12.5144 13 12.729 13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 11.8275 11.7737 11.0588 12.2293 10.6062L12.2929 10.5429C12.8502 9.98555 13 9.77094 13 9.49999C13 9.19919 12.8342 8.97493 12.4519 8.87521ZM10.75 16.75C10.75 16.0596 11.3096 15.5 12 15.5C12.6904 15.5 13.25 16.0596 13.25 16.75C13.25 17.4404 12.6904 18 12 18C11.3096 18 10.75 17.4404 10.75 16.75Z'
        fill={fill}
      />
    </svg>
  );
}

export default QuestionMarkFillIcon;
