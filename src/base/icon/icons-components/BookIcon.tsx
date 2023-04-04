import React from 'react';

interface Props {
  className: string;
  fill: string;
}

function BookIcon({ className, fill }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 19 17'
      className={className}
    >
      <path
        d='M9.483 1.64481C8.92181 1.09775 8.25547 0.670223 7.52426 0.388158C6.79306 0.106094 6.01218 -0.0246322 5.22898 0.00381983C2.72898 0.00381983 0.758998 1.3038 0.175998 2.6168V14.9238C0.161136 15.0693 0.178858 15.2163 0.227878 15.354C0.276898 15.4918 0.356032 15.617 0.459445 15.7204C0.562858 15.8238 0.68799 15.9029 0.825778 15.9519C0.963567 16.001 1.11046 16.0187 1.25595 16.0038C1.60482 16.0129 1.94428 15.8896 2.20603 15.6588C3.07151 14.9982 4.1412 14.662 5.22898 14.7088C6.33296 14.6664 7.42181 14.9764 8.33799 15.5938C8.65514 15.8678 9.063 16.014 9.48203 16.0038C9.89936 16.0039 10.3037 15.8589 10.6259 15.5938C11.5542 15.0028 12.6346 14.6952 13.735 14.7088C14.8219 14.6685 15.8896 15.004 16.758 15.6588C17.0315 15.8844 17.3755 16.0066 17.73 16.0038C17.8739 16.0161 18.0188 15.9964 18.1543 15.9462C18.2897 15.896 18.4124 15.8164 18.5135 15.7132C18.6146 15.61 18.6917 15.4857 18.7391 15.3492C18.7866 15.2128 18.8032 15.0675 18.7879 14.9238V2.6168C18.2049 1.2998 16.24 0.00381983 13.735 0.00381983C12.9527 -0.0194429 12.1736 0.113693 11.4435 0.395482C10.7133 0.677271 10.0468 1.10203 9.483 1.64481ZM1.81797 3.09177C2.05597 2.53077 3.24295 1.55881 5.22995 1.55881C7.23795 1.55881 8.44694 2.53077 8.66294 3.09177V14.1468C7.63676 13.4998 6.44276 13.1694 5.22995 13.1968C4.01978 13.1626 2.82845 13.502 1.81797 14.1688V3.09177ZM17.17 3.09177V14.1918C16.1569 13.5116 14.9568 13.1644 13.737 13.1988C12.5277 13.1748 11.3365 13.4968 10.3039 14.1268V3.0698C10.5199 2.5088 11.729 1.53678 13.737 1.53678C14.3943 1.48232 15.0546 1.59657 15.6554 1.86869C16.2561 2.14081 16.7775 2.56179 17.17 3.09177Z'
        fill={fill}
      />
    </svg>
  );
}

export default BookIcon;
