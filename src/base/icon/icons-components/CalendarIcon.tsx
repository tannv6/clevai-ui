import React from 'react';
import { IconProps } from '.';

function CalendarIcon({ className, fill }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M5.25948 22H18.7406C20.9047 22 22 20.9063 22 18.7177V6.28222C22 4.09366 20.9314 3 18.7406 3H5.25948C3.09541 3 2.00007 4.09366 2.00007 6.28222V18.7177C1.94382 19.1671 1.9899 19.6238 2.13464 20.052C2.27937 20.4802 2.51879 20.8683 2.83437 21.1861C3.14994 21.5039 3.53311 21.7427 3.95379 21.8839C4.37448 22.0251 4.82131 22.0648 5.25948 22ZM5.07733 20.1C4.90941 20.1196 4.73928 20.0998 4.58001 20.042C4.42073 19.9841 4.27654 19.8898 4.15833 19.7662C4.04012 19.6426 3.95107 19.4929 3.89799 19.3287C3.8449 19.1645 3.82911 18.99 3.85195 18.8187V9.02534C3.82911 8.85397 3.8449 8.67952 3.89799 8.51531C3.95107 8.3511 4.04012 8.20151 4.15833 8.0779C4.27654 7.95428 4.42073 7.8599 4.58001 7.80204C4.73928 7.74418 4.90941 7.72438 5.07733 7.74406H18.8973C19.0665 7.72366 19.238 7.74276 19.399 7.79994C19.56 7.85712 19.7063 7.95089 19.8268 8.0742C19.9472 8.1975 20.0387 8.34716 20.0946 8.5119C20.1505 8.67664 20.1692 8.85216 20.1493 9.02534V18.8187C20.1692 18.9919 20.1505 19.1674 20.0946 19.3322C20.0387 19.4969 19.9472 19.6465 19.8268 19.7698C19.7063 19.8931 19.56 19.9869 19.399 20.0441C19.238 20.1013 19.0665 20.1203 18.8973 20.1H5.07733ZM10.0576 11.4312H10.6308C11.0219 11.4312 11.1518 11.2982 11.1518 10.9242V10.3376C11.1518 9.96352 11.0219 9.83052 10.6308 9.83052H10.0576C9.69208 9.83052 9.56212 9.96352 9.56212 10.3376V10.9242C9.56212 11.3255 9.69208 11.4312 10.0576 11.4312ZM13.3438 11.4312H13.917C14.2825 11.4312 14.4125 11.2982 14.4125 10.9242V10.3376C14.4125 9.96352 14.2825 9.83052 13.917 9.83052H13.3438C12.9527 9.83052 12.8228 9.96352 12.8228 10.3376V10.9242C12.8472 11.3255 12.9783 11.4312 13.3426 11.4312H13.3438ZM16.6288 11.4312H17.2019C17.5674 11.4312 17.723 11.2982 17.723 10.9242V10.3376C17.723 9.96352 17.593 9.83052 17.2019 9.83052H16.6288C16.2378 9.83052 16.1077 9.96352 16.1077 10.3376V10.9242C16.1065 11.3255 16.2378 11.4312 16.6288 11.4312ZM6.79818 14.7396H7.37142C7.76247 14.7396 7.8924 14.6066 7.8924 14.2325V13.6186C7.8924 13.2446 7.76247 13.1116 7.37142 13.1116H6.79818C6.43267 13.1116 6.27721 13.2446 6.27721 13.6186V14.2052C6.27605 14.6078 6.43267 14.742 6.79818 14.742V14.7396ZM10.0576 14.7396H10.6308C11.0219 14.7396 11.1518 14.6066 11.1518 14.2325V13.6186C11.1518 13.2446 11.0219 13.1116 10.6308 13.1116H10.0576C9.69208 13.1116 9.56212 13.2446 9.56212 13.6186V14.2052C9.56212 14.6078 9.69208 14.742 10.0576 14.742V14.7396ZM13.3438 14.7396H13.917C14.2825 14.7396 14.4125 14.6066 14.4125 14.2325V13.6186C14.4125 13.2446 14.2825 13.1116 13.917 13.1116H13.3438C12.9527 13.1116 12.8228 13.2446 12.8228 13.6186V14.2052C12.8472 14.6078 12.9783 14.742 13.3426 14.742L13.3438 14.7396ZM16.6288 14.7396H17.2019C17.5674 14.7396 17.723 14.6066 17.723 14.2325V13.6186C17.723 13.2446 17.593 13.1116 17.2019 13.1116H16.6288C16.2378 13.1116 16.1077 13.2446 16.1077 13.6186V14.2052C16.1065 14.6078 16.2378 14.742 16.6288 14.742V14.7396ZM6.79818 18.0218H7.37142C7.76247 18.0218 7.8924 17.8888 7.8924 17.5148V16.9282C7.8924 16.5541 7.76247 16.4211 7.37142 16.4211H6.79818C6.43267 16.4211 6.27721 16.5541 6.27721 16.9282V17.5148C6.27605 17.9173 6.43267 18.0242 6.79818 18.0242V18.0218ZM10.0576 18.0218H10.6308C11.0219 18.0218 11.1518 17.8888 11.1518 17.5148V16.9282C11.1518 16.5541 11.0219 16.4211 10.6308 16.4211H10.0576C9.69208 16.4211 9.56212 16.5541 9.56212 16.9282V17.5148C9.56212 17.9173 9.69208 18.0242 10.0576 18.0242V18.0218ZM13.3438 18.0218H13.917C14.2825 18.0218 14.4125 17.8888 14.4125 17.5148V16.9282C14.4125 16.5541 14.2825 16.4211 13.917 16.4211H13.3438C12.9527 16.4211 12.8228 16.5541 12.8228 16.9282V17.5148C12.8472 17.9173 12.9783 18.0242 13.3426 18.0242L13.3438 18.0218Z'
        fill={fill}
      />
    </svg>
  );
}

export default CalendarIcon;