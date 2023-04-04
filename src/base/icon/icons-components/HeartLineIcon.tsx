import React from 'react';
import { IconProps } from '.';

function HeartLineIcon({ className, fill }: IconProps) {
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
        d='M10.7929 6.20709C9.25046 4.66461 6.74962 4.66461 5.20715 6.20708C3.66467 7.74956 3.66467 10.2504 5.20715 11.7929L12 18.5858L18.7929 11.7929C20.3354 10.2504 20.3354 7.74956 18.7929 6.20708C17.2505 4.66461 14.7496 4.66461 13.2071 6.20709L12.7071 6.70709C12.3166 7.09761 11.6835 7.09761 11.2929 6.70709L10.7929 6.20709ZM12 4.59533C9.66491 2.47133 6.04863 2.53718 3.79293 4.79287C1.46941 7.11639 1.46941 10.8836 3.79293 13.2071L11.2929 20.7071C11.6835 21.0976 12.3166 21.0976 12.7071 20.7071L20.2071 13.2071C22.5307 10.8836 22.5307 7.11639 20.2071 4.79287C17.9515 2.53718 14.3352 2.47133 12 4.59533Z'
        fill={fill}
      />
    </svg>
  );
}

export default HeartLineIcon;
