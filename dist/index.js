function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"h1":"_xaQ6C","h2":"_5q2Fq","h3":"_2PZyB","h4":"_2DE81","body":"_2ku65","caption":"_yHFhW","note":"_1T55e","font-bold":"_6Y5t4","font-semibold":"_kUJg-","font-medium":"_2v2vc","font-regular":"_12YgX","type-1":"_33j4F","type-2":"_3yQao"};

var ExampleButton = function ExampleButton(_ref) {
  var text = _ref.text,
    type = _ref.type;
  return React.createElement("div", {
    className: styles[type]
  }, text);
};

var styles$1 = {"h1":"_fX5D2","h2":"_3q58I","h3":"_2iC0F","h4":"_1aDJq","body":"_tfaPw","caption":"_3rauF","note":"_3E5Cb","font-bold":"_3eTmN","font-semibold":"_2ouck","font-medium":"_3esy5","font-regular":"_1GwCX","xs":"_4983V","sm":"_2I7Rh","md":"_1zYyk","lg":"_3tJsu","xl":"_1j3h4","primary":"_DSHY6","secondary":"_3b0Z8","gray":"_1MXMB","gray70":"_3ZdhM","white":"_7DIk1"};

var CircleIcon = function CircleIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 448 512',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    d: 'M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z',
    fill: fill
  }));
};

var FacebookIcon = function FacebookIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 320 512',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    d: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z',
    fill: fill
  }));
};

var ArrowLeftIcon = function ArrowLeftIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 8 14',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    "fill-rule": 'evenodd',
    "clip-rule": 'evenodd',
    d: 'M7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292892 7.70711C-0.097632 7.31658 -0.0976321 6.68342 0.292892 6.29289L6.29289 0.292893C6.68342 -0.0976313 7.31658 -0.0976314 7.70711 0.292892C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071Z',
    fill: fill
  }));
};

var ArrowRightIcon = function ArrowRightIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 8 14',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    "fill-rule": 'evenodd',
    "clip-rule": 'evenodd',
    d: 'M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z',
    fill: fill
  }));
};

var CloseIcon = function CloseIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 20 20',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    "fill-rule": 'evenodd',
    "clip-rule": 'evenodd',
    d: 'M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM5.61612 5.61612C6.10427 5.12796 6.89573 5.12796 7.38388 5.61612L10 8.23223L12.6161 5.61612C13.1043 5.12796 13.8957 5.12796 14.3839 5.61612C14.872 6.10427 14.872 6.89573 14.3839 7.38388L11.7678 10L14.3839 12.6161C14.872 13.1043 14.872 13.8957 14.3839 14.3839C13.8957 14.872 13.1043 14.872 12.6161 14.3839L10 11.7678L7.38388 14.3839C6.89573 14.872 6.10427 14.872 5.61612 14.3839C5.12796 13.8957 5.12796 13.1043 5.61612 12.6161L8.23223 10L5.61612 7.38388C5.12796 6.89573 5.12796 6.10427 5.61612 5.61612Z',
    fill: fill
  }));
};

var BookIcon = function BookIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 19 17',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    d: 'M9.483 1.64481C8.92181 1.09775 8.25547 0.670223 7.52426 0.388158C6.79306 0.106094 6.01218 -0.0246322 5.22898 0.00381983C2.72898 0.00381983 0.758998 1.3038 0.175998 2.6168V14.9238C0.161136 15.0693 0.178858 15.2163 0.227878 15.354C0.276898 15.4918 0.356032 15.617 0.459445 15.7204C0.562858 15.8238 0.68799 15.9029 0.825778 15.9519C0.963567 16.001 1.11046 16.0187 1.25595 16.0038C1.60482 16.0129 1.94428 15.8896 2.20603 15.6588C3.07151 14.9982 4.1412 14.662 5.22898 14.7088C6.33296 14.6664 7.42181 14.9764 8.33799 15.5938C8.65514 15.8678 9.063 16.014 9.48203 16.0038C9.89936 16.0039 10.3037 15.8589 10.6259 15.5938C11.5542 15.0028 12.6346 14.6952 13.735 14.7088C14.8219 14.6685 15.8896 15.004 16.758 15.6588C17.0315 15.8844 17.3755 16.0066 17.73 16.0038C17.8739 16.0161 18.0188 15.9964 18.1543 15.9462C18.2897 15.896 18.4124 15.8164 18.5135 15.7132C18.6146 15.61 18.6917 15.4857 18.7391 15.3492C18.7866 15.2128 18.8032 15.0675 18.7879 14.9238V2.6168C18.2049 1.2998 16.24 0.00381983 13.735 0.00381983C12.9527 -0.0194429 12.1736 0.113693 11.4435 0.395482C10.7133 0.677271 10.0468 1.10203 9.483 1.64481ZM1.81797 3.09177C2.05597 2.53077 3.24295 1.55881 5.22995 1.55881C7.23795 1.55881 8.44694 2.53077 8.66294 3.09177V14.1468C7.63676 13.4998 6.44276 13.1694 5.22995 13.1968C4.01978 13.1626 2.82845 13.502 1.81797 14.1688V3.09177ZM17.17 3.09177V14.1918C16.1569 13.5116 14.9568 13.1644 13.737 13.1988C12.5277 13.1748 11.3365 13.4968 10.3039 14.1268V3.0698C10.5199 2.5088 11.729 1.53678 13.737 1.53678C14.3943 1.48232 15.0546 1.59657 15.6554 1.86869C16.2561 2.14081 16.7775 2.56179 17.17 3.09177Z',
    fill: fill
  }));
};

var GiftIcon = function GiftIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 18 19',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    d: 'M4.09307 18.6484H13.2531C13.6163 18.6979 13.986 18.6635 14.3338 18.5479C14.6816 18.4323 14.9984 18.2386 15.2597 17.9816C15.521 17.7246 15.7201 17.4111 15.8415 17.0653C15.9629 16.7194 16.0034 16.3504 15.96 15.9864V10.8574H15.982C16.3616 10.7536 16.6915 10.5171 16.9117 10.1909C17.1319 9.86465 17.2278 9.47027 17.1821 9.07936V6.6794C17.2127 6.43598 17.1889 6.18877 17.1122 5.95571C17.0356 5.72264 16.9081 5.50954 16.7389 5.3318C16.5698 5.15407 16.3633 5.01616 16.1343 4.92806C15.9054 4.83995 15.6597 4.80388 15.4151 4.82241H13.9051C14.3406 4.33367 14.5761 3.69892 14.565 3.04439C14.5634 2.63386 14.4792 2.22785 14.3173 1.8506C14.1554 1.47336 13.9191 1.13263 13.6226 0.848712C13.3261 0.564791 12.9754 0.34348 12.5915 0.198077C12.2076 0.0526734 11.7982 -0.0138595 11.388 0.00239811C11.1656 0.538571 10.7894 0.996794 10.3067 1.31917C9.82399 1.64155 9.25654 1.81362 8.67608 1.81362C8.09562 1.81362 7.52817 1.64155 7.04546 1.31917C6.56276 0.996794 6.18642 0.538571 5.96404 0.00239811C5.55412 -0.012881 5.14533 0.0543826 4.7619 0.200152C4.37847 0.345921 4.02823 0.567229 3.73199 0.85097C3.43575 1.13471 3.19956 1.47509 3.03741 1.85189C2.87526 2.22868 2.79041 2.63419 2.78802 3.04439C2.7807 3.70025 3.02023 4.33491 3.45904 4.82241H1.94903C1.7058 4.80958 1.46268 4.84959 1.23638 4.93965C1.01008 5.02972 0.806014 5.16768 0.638116 5.34413C0.470218 5.52058 0.342448 5.73132 0.263726 5.96181C0.185004 6.1923 0.157179 6.43711 0.182061 6.6794V9.07936C0.136306 9.47027 0.232148 9.86465 0.452325 10.1909C0.672502 10.5171 1.00237 10.7536 1.38201 10.8574H1.393V15.9914C1.35069 16.3543 1.39185 16.7221 1.51324 17.0667C1.63463 17.4113 1.83314 17.7237 2.09356 17.9799C2.35398 18.2362 2.66941 18.4296 3.01592 18.5455C3.36244 18.6613 3.73089 18.6965 4.09307 18.6484ZM7.90704 4.81337H6.45306C5.12206 4.81337 4.3731 4.04142 4.3731 3.14742C4.36641 2.92831 4.4068 2.71028 4.49175 2.5082C4.5767 2.30611 4.70418 2.12468 4.86541 1.97615C5.02664 1.82763 5.21796 1.71553 5.42632 1.64742C5.63469 1.57931 5.85523 1.55676 6.07305 1.58138C6.32673 1.58042 6.57781 1.63212 6.81048 1.73323C7.04314 1.83434 7.25235 1.98267 7.42474 2.16878C7.59713 2.35489 7.72892 2.57476 7.81194 2.81447C7.89497 3.05418 7.92738 3.30855 7.90704 3.56142V4.81337ZM9.43902 4.81337V3.55739C9.41889 3.30358 9.45184 3.04835 9.5357 2.80794C9.61956 2.56753 9.75258 2.3472 9.9262 2.16097C10.0998 1.97474 10.3103 1.82669 10.5442 1.72621C10.7782 1.62574 11.0305 1.57509 11.2851 1.57741C11.5028 1.55364 11.723 1.57674 11.931 1.64516C12.139 1.71358 12.3299 1.82573 12.4909 1.97408C12.6519 2.12243 12.7793 2.30351 12.8646 2.50521C12.9498 2.7069 12.9909 2.92451 12.985 3.14339C12.985 4.03839 12.2361 4.8094 10.9051 4.8094L9.43902 4.81337ZM7.85101 9.4214H2.38201C1.94601 9.4214 1.789 9.26439 1.789 8.82839V6.89339C1.789 6.45739 1.94501 6.31142 2.38201 6.31142H7.85101V9.4214ZM9.50604 9.4214V6.3124H14.986C15.422 6.3124 15.5561 6.45737 15.5561 6.89437V8.82936C15.5561 9.26536 15.422 9.42238 14.986 9.42238L9.50604 9.4214ZM7.85101 17.1384H4.0711C3.92673 17.1542 3.7806 17.1372 3.64373 17.0886C3.50686 17.0401 3.38269 16.9612 3.28057 16.8579C3.17846 16.7547 3.10103 16.6297 3.05401 16.4923C3.00699 16.3549 2.99165 16.2086 3.00909 16.0644V10.9194H7.85211L7.85101 17.1384ZM9.50604 17.1384V10.9204H14.3491V16.0654C14.366 16.2105 14.3499 16.3576 14.3019 16.4957C14.254 16.6337 14.1754 16.7591 14.0721 16.8624C13.9687 16.9658 13.8434 17.0443 13.7054 17.0923C13.5673 17.1403 13.4202 17.1564 13.2751 17.1394L9.50604 17.1384Z',
    fill: fill
  }));
};

var ChestnutIcon = function ChestnutIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 23 28',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    d: 'M17.15 3.26701H13.067V1.05001C13.0675 0.911971 13.0407 0.775196 12.9882 0.647565C12.9356 0.519935 12.8583 0.403973 12.7606 0.306366C12.663 0.208759 12.5471 0.131437 12.4194 0.078857C12.2918 0.0262768 12.155 -0.000521202 12.017 7.67828e-06H10.85C10.712 -0.000521202 10.5752 0.0262768 10.4476 0.078857C10.3199 0.131437 10.204 0.208759 10.1064 0.306366C10.0088 0.403973 9.93144 0.519935 9.87886 0.647565C9.82628 0.775196 9.79948 0.911971 9.80001 1.05001V3.26701H5.48301C4.76275 3.26622 4.04941 3.4075 3.38382 3.68277C2.71824 3.95803 2.11348 4.36188 1.60418 4.87118C1.09488 5.38048 0.691035 5.98524 0.415768 6.65082C0.140502 7.31641 -0.000781792 8.02975 7.67827e-06 8.75001V10.15C-0.000521202 10.288 0.0262769 10.4248 0.078857 10.5525C0.131437 10.6801 0.208759 10.796 0.306366 10.8936C0.403973 10.9913 0.519935 11.0686 0.647565 11.1212C0.775196 11.1737 0.911971 11.2005 1.05001 11.2H21.467C21.605 11.2005 21.7418 11.1737 21.8695 11.1212C21.9971 11.0686 22.113 10.9913 22.2106 10.8936C22.3083 10.796 22.3856 10.6801 22.4382 10.5525C22.4907 10.4248 22.5175 10.288 22.517 10.15V8.75001C22.5408 8.03333 22.4192 7.31926 22.1594 6.65091C21.8996 5.98256 21.5071 5.37379 21.0055 4.86135C20.5039 4.34892 19.9036 3.94344 19.241 3.66942C18.5783 3.3954 17.867 3.2585 17.15 3.26701ZM21.583 13.184H1.05001V16.334C1.04328 19.1964 2.08339 21.9624 3.97445 24.1112C5.86551 26.2599 8.47698 27.643 11.317 28C14.157 27.6428 16.7684 26.2594 18.6593 24.1105C20.5501 21.9616 21.59 19.1954 21.583 16.333V13.184Z',
    fill: fill
  }));
};

var StarIcon = function StarIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 30 28',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    d: 'M14.6531 23.4494L21.7531 27.7494C22.0406 27.9244 22.3735 28.0106 22.7098 27.9971C23.0462 27.9836 23.371 27.871 23.6436 27.6734C23.9161 27.4758 24.1242 27.2022 24.2418 26.8867C24.3593 26.5713 24.3809 26.2281 24.3041 25.9004L22.4211 17.8204L28.7041 12.3764C28.9605 12.1568 29.146 11.8663 29.2374 11.5413C29.3287 11.2164 29.3218 10.8716 29.2173 10.5506C29.1129 10.2297 28.9157 9.94682 28.6507 9.73783C28.3856 9.52883 28.0646 9.40306 27.7281 9.3764L19.4591 8.67639L16.2281 1.03939C16.0962 0.730959 15.8766 0.468043 15.5966 0.28327C15.3166 0.0984974 14.9885 0 14.6531 0C14.3176 0 13.9895 0.0984974 13.7095 0.28327C13.4296 0.468043 13.21 0.730959 13.0781 1.03939L9.84206 8.65739L1.57307 9.3574C1.23658 9.38406 0.915534 9.50983 0.650473 9.71883C0.385413 9.92782 0.18822 10.2107 0.0837931 10.5316C-0.0206336 10.8526 -0.0276114 11.1974 0.0637407 11.5223C0.155093 11.8473 0.340678 12.1378 0.597065 12.3574L6.88006 17.8014L4.99706 25.8814C4.92096 26.2089 4.94322 26.5516 5.06105 26.8665C5.17888 27.1814 5.38704 27.4546 5.65944 27.6517C5.93184 27.8488 6.25636 27.9611 6.59232 27.9746C6.92829 27.9881 7.26076 27.9021 7.54807 27.7274L14.6531 23.4494Z',
    fill: fill
  }));
};

var BookIcon$1 = function BookIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    fill = _ref.fill;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 12 12',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    d: 'M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.097631 0.683417 -0.097631 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3166 -0.097631 10.6834 -0.0976309 10.2929 0.292893L6 4.58579L1.70711 0.292893Z',
    fill: fill
  }));
};

var icons = {
  circle: CircleIcon,
  fb: FacebookIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  close: CloseIcon,
  gift: GiftIcon,
  star: StarIcon,
  close2: BookIcon$1,
  chestnut: ChestnutIcon,
  book: BookIcon
};
var Icon = function Icon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    type = _ref.type,
    fill = _ref.fill;
  var Element = icons[type] || icons.circle;
  return React__default.createElement(Element, {
    size: size,
    color: color,
    fill: fill
  });
};
Icon.defaultProp = {
  size: 'sm',
  color: 'primary',
  type: 'circle',
  fill: ''
};

var styles$2 = {"h1":"_2vqE-","h2":"_3yJwX","h3":"_2P1HB","h4":"_enyR1","body":"_3Qjvi","caption":"_2mgJ7","note":"_WH81j","font-bold":"_3MkhO","font-semibold":"_1HPML","font-medium":"_gEqzI","font-regular":"_3U8jR","display-block":"_31_XB","display-inline":"_3z0dd","align-center":"_r94Hl","align-left":"_f0wLZ","align-right":"_2U2Lp","color-white":"_SoiYy","color-gray":"_3CxI-","color-primary":"_LViNk"};

var TYPES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'body',
  caption: 'caption',
  note: 'note'
};
var Heading = function Heading(_ref) {
  var children = _ref.children,
    type = _ref.type,
    font = _ref.font,
    display = _ref.display,
    align = _ref.align,
    color = _ref.color,
    id = _ref.id;
  var className = styles$2[type] + " " + styles$2['display-' + display] + " " + styles$2['color-' + color] + " " + styles$2['align-' + align] + " " + styles$2['font-' + font];
  if (TYPES.h1 === type) {
    return React__default.createElement("h1", {
      id: id,
      className: className
    }, children);
  }
  if (TYPES.h2 === type) {
    return React__default.createElement("h2", {
      id: id,
      className: className
    }, children);
  }
  if (TYPES.h3 === type) {
    return React__default.createElement("h3", {
      id: id,
      className: className
    }, children);
  }
  if (TYPES.h4 === type) {
    return React__default.createElement("h4", {
      id: id,
      className: className
    }, children);
  }
  if (TYPES.body === type) {
    return React__default.createElement("p", {
      id: id,
      className: className
    }, children);
  }
  if (TYPES.caption === type) {
    return React__default.createElement("p", {
      id: id,
      className: className
    }, children);
  }
  if (TYPES.note === type) {
    return React__default.createElement("label", {
      id: id,
      className: className
    }, children);
  }
  return React__default.createElement("p", {
    id: id,
    className: className
  }, children);
};
Heading.defaultProps = {
  display: 'block',
  align: 'left',
  color: 'gray'
};

var styles$3 = {"h1":"_2TGE0","h2":"_Aylvo","h3":"_Vl8BK","h4":"_1Y4uE","body":"_2XMaV","caption":"_fcrmL","note":"_3p3FA","font-bold":"_26KrJ","font-semibold":"_3H8wI","font-medium":"_28rw-","font-regular":"_2gPGh","container":"_1pA9x","container-fluid":"_34tDh","row":"_2NwDW","row-reversed":"_D-Yw9","bg-white":"_1G--D","bg-primary":"_37M2I","bg-tranparent":"_35mKr","bg-background":"_2ixeh","col-1":"_3Mtkz","col-2":"_2pvKu","col-3":"_3OFM2","col-4":"_8OoRv","col-5":"_1BC09","col-6":"_V6Uaz","col-7":"_3R-up","col-8":"_1RFL_","col-9":"_2k-yC","col-10":"_2WQw-","col-11":"_10tsp","col-12":"_JGdcA","br-0":"_bCQwN","br-1":"_1hdBf","br-2":"_2Ln10","br-3":"_5QTZa","br-4":"_2rhBh","br-5":"_15xBj","br-6":"_14kb5","br-7":"_19Qbm","br-8":"_1BQda","br-9":"_1PUO6","br-10":"_1oEo0","br-11":"_2Chmu","br-12":"_rX__V","mt-0":"_3TOOm","mt-1":"_3HIEa","mt-2":"_1nfBk","mt-3":"_adW7p","mt-4":"_12n1Y","mt-5":"_17MgJ","mt-6":"_3Hlj3","mt-7":"_3d0nr","mt-8":"_2rsba","mt-9":"_3LYUW","mt-10":"_FUHlj","mt-11":"_3FGKv","mt-12":"_1uXku","mr-0":"_a61GE","mr-1":"_3EvmB","mr-2":"_gdfxS","mr-3":"_2R_5W","mr-4":"_23-F1","mr-5":"_rZgPI","mr-6":"_3A7KF","mr-7":"_2AJnj","mr-8":"_Gi7P4","mr-9":"_2zhVw","mr-10":"_1fURn","mr-11":"_9Pwrd","mr-12":"_3Y_ec","ml-0":"_3qQNM","ml-1":"_2MZ4b","ml-2":"_1M1qu","ml-3":"_2gT-z","ml-4":"_py_1a","ml-5":"_2w_Qv","ml-6":"_39-pZ","ml-7":"_2Ny6k","ml-8":"_Iw_t6","ml-9":"_1Oeyb","ml-10":"_32nFN","ml-11":"_f9Z2T","ml-12":"_1v_b4","mb-0":"_36YE-","mb-1":"_17p1K","mb-2":"_3qhnl","mb-3":"_10mU4","mb-4":"_2op15","mb-5":"_4csYA","mb-6":"_2AAlt","mb-7":"_1Gb9P","mb-8":"_VTOZd","mb-9":"_1sTrZ","mb-10":"_2i9js","mb-11":"_SlhQA","mb-12":"_3iNTL","pt-0":"_zQUKj","pt-1":"_30I2l","pt-2":"_peK6c","pt-3":"_1_tQo","pt-4":"_2Znqo","pt-5":"_23H7Y","pt-6":"_28OpO","pt-7":"_2w1Yc","pt-8":"_2kdr9","pt-9":"_3OmBg","pt-10":"_hl2sg","pt-11":"_3RyBi","pt-12":"_2xLsG","pr-0":"_3Lsa1","pr-1":"_qDXjQ","pr-2":"_1tIFl","pr-3":"_324I7","pr-4":"_2wwax","pr-5":"_O1uAw","pr-6":"_2kBJQ","pr-7":"_3cQAe","pr-8":"_1I0h5","pr-9":"_ipxjN","pr-10":"_3EvkI","pr-11":"_39XOR","pr-12":"_3Md5r","pl-0":"_1iIFV","pl-1":"_5az6_","pl-2":"_4bzV_","pl-3":"_1HeqZ","pl-4":"_2OUl2","pl-5":"_28YuU","pl-6":"_gmCF2","pl-7":"_2dm-y","pl-8":"_3isW7","pl-9":"_3WwMq","pl-10":"_VRMAX","pl-11":"_1THhH","pl-12":"_2vp-Z","pb-0":"_2GOqt","pb-1":"_vH5nK","pb-2":"_3w957","pb-3":"_W8a69","pb-4":"_1laJC","pb-5":"_3St8Y","pb-6":"_oDUhH","pb-7":"_3XfRG","pb-8":"_2sXp_","pb-9":"_3n7P5","pb-10":"_WO3OM","pb-11":"_1wbxO","pb-12":"_36TLb"};

var Row = function Row(_ref) {
  var mt = _ref.mt,
    mb = _ref.mb,
    ml = _ref.ml,
    mr = _ref.mr,
    pt = _ref.pt,
    pb = _ref.pb,
    pl = _ref.pl,
    pr = _ref.pr,
    col = _ref.col,
    children = _ref.children,
    bg = _ref.bg,
    br = _ref.br,
    reversed = _ref.reversed;
  return React__default.createElement("div", {
    className: styles$3.row + ' ' + styles$3["row-" + (reversed ? 'reversed' : '')] + ' ' + styles$3["bg-" + bg] + ' ' + styles$3["br-" + br] + ' ' + styles$3["col-" + col] + ' ' + styles$3["mt-" + mt] + ' ' + styles$3["mr-" + mr] + ' ' + styles$3["mb-" + mb] + ' ' + styles$3["ml-" + ml] + ' ' + styles$3["pt-" + pt] + ' ' + styles$3["pr-" + pr] + ' ' + styles$3["pb-" + pb] + ' ' + styles$3["pl-" + pl]
  }, children);
};
Row.defaultProps = {
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
  pt: 0,
  pb: 0,
  pr: 0,
  pl: 0,
  col: 12,
  bg: 'tranparent',
  br: 0
};

var Container = function Container(_ref) {
  var children = _ref.children,
    bg = _ref.bg,
    isFullWidth = _ref.isFullWidth;
  return React__default.createElement("div", {
    className: styles$3["bg-" + bg] + ' ' + styles$3["container" + (isFullWidth ? '-fluid' : '')]
  }, children);
};
Container.defaultProps = {
  bg: 'tranparent',
  isFullWidth: false
};

var styles$4 = {"h1":"_JUQcC","h2":"_1Uo8N","h3":"_1nxRZ","h4":"_2hDAo","body":"_tU9kN","caption":"_3wrG_","note":"_1-aWK","font-bold":"_1lxgX","font-semibold":"_2iQLC","font-medium":"_3zKm9","font-regular":"_-s1su","mt-0":"_2SeE6","mt-1":"_3GMwx","mt-2":"_lhqWC","mt-3":"_1AEdA","mt-4":"_ucAb-","mt-5":"_zj3pg","mt-6":"_3QrqU","mt-7":"_3YvGz","mt-8":"_WGagA","mt-9":"_1Oxi3","mt-10":"_2T-_s","mt-11":"_ST89n","mt-12":"_1tPSQ","mr-0":"_1LD8y","mr-1":"_23BQV","mr-2":"_1Lanh","mr-3":"_35dTQ","mr-4":"_3SB-W","mr-5":"_1N61f","mr-6":"_2wB_x","mr-7":"_xyHKU","mr-8":"_3VPWk","mr-9":"_1Wgk7","mr-10":"_1mAgb","mr-11":"_2wU0h","mr-12":"_2Jzr8","ml-0":"_2TUrs","ml-1":"_2UYTT","ml-2":"_3G2LO","ml-3":"_fMoo8","ml-4":"_DWaXT","ml-5":"_2iTFF","ml-6":"_2--NC","ml-7":"_2PCAU","ml-8":"_1aZcP","ml-9":"_39e8u","ml-10":"_2diJD","ml-11":"_3Gyxk","ml-12":"_2H1eq","mb-0":"_cufjB","mb-1":"_2dA3N","mb-2":"_nNDNr","mb-3":"_1e43r","mb-4":"_28V1m","mb-5":"_3bzxt","mb-6":"_AK6Sk","mb-7":"_2jb17","mb-8":"_3cJyE","mb-9":"_2vjTT","mb-10":"_2FWwo","mb-11":"_2sZcC","mb-12":"_2xBkM","label-1":"_3MTkC","label-2":"_1Ssf7","label-3":"_11WCo","label-4":"_3YHO5","label-5":"_3bCON"};

var Label = function Label(_ref) {
  var mt = _ref.mt,
    mb = _ref.mb,
    ml = _ref.ml,
    mr = _ref.mr,
    children = _ref.children,
    type = _ref.type;
  return React__default.createElement("span", {
    className: styles$4["label-" + type] + ' ' + styles$4["mt-" + mt] + ' ' + styles$4["mr-" + mr] + ' ' + styles$4["mb-" + mb] + ' ' + styles$4["ml-" + ml]
  }, children);
};
Label.defaultProps = {
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
  type: '1'
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var styles$5 = {"gray4Color":"#f5f5f6","gray10Color":"#d9dadb","h1":"_1fyTD","h2":"_DHsM1","h3":"_M9wgr","h4":"_2HebS","body":"_2QugS","caption":"_b5L87","note":"_1Cw7-","font-bold":"_1Isxa","font-semibold":"_3I18L","font-medium":"_1xUw_","font-regular":"_jYOkI","circle-loading":"_3hXpB","round":"_15-Zn"};

function CircleLoading(_ref) {
  var border = _ref.border,
    width = _ref.width,
    color = _ref.color;
  return React__default.createElement("div", {
    className: " " + styles$5["circle-loading"],
    style: {
      width: width,
      height: width,
      borderWidth: border,
      borderTopColor: color && styles$5[color[0]],
      borderBottomColor: color && styles$5[color[1]],
      borderLeftColor: color && styles$5[color[1]],
      borderRightColor: color && styles$5[color[1]]
    }
  });
}
CircleLoading.defaultProp = {
  border: 2,
  width: 20,
  color: []
};

var styles$6 = {"h1":"_2jGMV","h2":"_1Rzgv","h3":"_3OyWy","h4":"_3NXlZ","body":"_K6SPz","caption":"_2snYP","note":"_1H8cN","font-bold":"_1MtHz","font-semibold":"_XutCa","font-medium":"_35yzi","font-regular":"_1mW1F","btn-size-sm":"_z91fQ","btn-size-md":"_1r7Vm","btn-size-lg":"_1_jZD","btn-size-xl":"_L5rQ7","btn-bg-orange":"_2Pwlx","btn-bg-orange-reversed":"_1-n9O","btn-bg-blue":"_3LGz_","btn-bg-blue-reversed":"_3CBV2","btn-bg-green":"_wI5Hy","btn-bg-green-reversed":"_2ybaQ","btn-bg-crimson":"_2Gql9","btn-bg-crimson-reversed":"_LQnO8","btn-type-primary":"_2yPNR","btn-type-primary-reversed":"_QBZ2Q","btn-type-default":"_1nr2L","btn-type-default-reversed":"_HWTqQ","btn-type-text":"_oHn3h","btn-type-text-reversed":"_4vukh","btn-type-link":"_3Cwcr","btn-type-link-reversed":"_yl0v4"};

var _excluded = ["children", "icons", "color", "size", "width", "reversed", "category", "loading"];
var Button = function Button(_ref) {
  var children = _ref.children,
    icons = _ref.icons,
    color = _ref.color,
    size = _ref.size,
    width = _ref.width,
    reversed = _ref.reversed,
    category = _ref.category,
    loading = _ref.loading,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var MAP_ICON_SIZE = {
    sm: 'xs',
    md: 'sm',
    lg: 'sm',
    xl: 'md'
  };
  var MAP_LOADING = {
    LOADING_WIDTH: {
      sm: 16,
      md: 20,
      lg: 20,
      xl: 24
    },
    BORDER_WIDTH: {
      sm: 1.5,
      md: 2,
      lg: 2,
      xl: 2.5
    }
  };
  return React__default.createElement("button", Object.assign({}, props, {
    className: (props.className || '') + " " + styles$6["btn-bg-" + color + (reversed ? '-reversed' : '')] + " " + styles$6["btn-type-" + category + (reversed ? '-reversed' : '')] + " " + styles$6["btn-size-" + size],
    style: {
      width: width
    }
  }), loading && React__default.createElement(CircleLoading, {
    border: MAP_LOADING.BORDER_WIDTH[size],
    width: MAP_LOADING.LOADING_WIDTH[size],
    color: ['gray10Color', 'gray4Color']
  }), icons && icons[0] && React__default.createElement(Icon, {
    color: 'white',
    size: MAP_ICON_SIZE[size],
    type: icons[0]
  }), children, icons && icons[1] && React__default.createElement(Icon, {
    color: 'white',
    size: MAP_ICON_SIZE[size],
    type: icons[1]
  }));
};
Button.defaultProp = {
  id: '',
  className: '',
  onPress: function onPress() {},
  type: 'default',
  system: 'student',
  size: 'lg',
  icons: []
};

var styles$7 = {"h1":"_2czJv","h2":"_3uOdg","h3":"_3KL3Z","h4":"_2hMPc","body":"_3i4Kp","caption":"_20r3G","note":"_h89nU","font-bold":"_23v7G","font-semibold":"_1tov-","font-medium":"_hc4hr","font-regular":"_2j9tc","clevai-popup":"_2drtx","clevai-lib-ui-popup-show":"_1yiL3","clevai-popup__hide":"_2dz8g","clevai-popup__wrapper":"_2uTmL"};

function Popup(_ref) {
  var children = _ref.children,
    id = _ref.id,
    isShow = _ref.isShow,
    zIndex = _ref.zIndex,
    closeOnDocumentClick = _ref.closeOnDocumentClick,
    onClickClose = _ref.onClickClose;
  var _React$useState = React__default.useState(false),
    showDelay = _React$useState[0],
    setShowDelay = _React$useState[1];
  var timer = React__default.useRef(null);
  React__default.useEffect(function () {
    if (isShow) {
      timer.current && clearTimeout(timer.current);
      timer.current = null;
      setShowDelay(true);
    }
    if (!isShow) {
      timer.current = setTimeout(function () {
        setShowDelay(false);
      }, 300);
    }
  }, [isShow]);
  if (!showDelay) {
    return React__default.createElement("div", null);
  }
  var style = {
    zIndex: zIndex || 1,
    cursor: closeOnDocumentClick ? 'pointer' : 'default '
  };
  return React__default.createElement("div", {
    className: styles$7['clevai-popup'] + " " + (!isShow ? styles$7['clevai-popup__hide'] : ''),
    id: id,
    style: style,
    onClick: function onClick() {
      return closeOnDocumentClick && onClickClose();
    }
  }, React__default.createElement("div", {
    className: styles$7['clevai-popup__wrapper'],
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React__default.createElement(React__default.Suspense, {
    fallback: React__default.createElement("span", null)
  }, children)));
}

var styles$8 = {"h1":"_1lW8U","h2":"_QEm8v","h3":"_3utfb","h4":"_LETKh","body":"_1bCV9","caption":"_1TOFS","note":"_3j1wC","font-bold":"_2agEa","font-semibold":"_n8eaf","font-medium":"_3A2Rk","font-regular":"_2pdxO","tooltip-container":"_2Kmw8","tooltip":"_2i8Ko","tooltip-bg-primary":"_KIV8I","tooltip-bg-secondary":"_2uMag","tooltip-bg-default":"_2MtrX","tooltip-position1-bottom":"_LDBMO","tooltip-position2-left":"_3_YSW","tooltip-position2-right":"_w-ukw","tooltip-position1-top":"_2WTF1","tooltip-position1-left":"_3wRLU","tooltip-position2-bottom":"_1jNkk","tooltip-position2-top":"_P_nbj","tooltip-position1-right":"_GBB28"};

function Tooltip(_ref) {
  var children = _ref.children,
    tooltip = _ref.tooltip,
    type = _ref.type,
    position = _ref.position;
  var position1 = position[0],
    position2 = position[1];
  return React__default.createElement("div", {
    className: "" + styles$8['tooltip-container']
  }, children, React__default.createElement("div", {
    className: styles$8.tooltip + " " + styles$8["tooltip-bg-" + type] + " " + (position1 ? styles$8["tooltip-position1-" + position1] : '') + " " + (position2 ? styles$8["tooltip-position2-" + position2] : '')
  }, tooltip));
}

exports.Button = Button;
exports.CircleLoading = CircleLoading;
exports.Container = Container;
exports.ExampleButton = ExampleButton;
exports.Heading = Heading;
exports.Icon = Icon;
exports.Label = Label;
exports.Popup = Popup;
exports.Row = Row;
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map
