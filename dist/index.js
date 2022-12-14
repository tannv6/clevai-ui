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

var styles$1 = {"h1":"_fX5D2","h2":"_3q58I","h3":"_2iC0F","h4":"_1aDJq","body":"_tfaPw","caption":"_3rauF","note":"_3E5Cb","font-bold":"_3eTmN","font-semibold":"_2ouck","font-medium":"_3esy5","font-regular":"_1GwCX","xs":"_4983V","sm":"_2I7Rh","md":"_1zYyk","lg":"_3tJsu","xl":"_1j3h4","primary":"_DSHY6","secondary":"_3b0Z8","gray":"_1MXMB"};

var CircleIcon = function CircleIcon(_ref) {
  var size = _ref.size,
    color = _ref.color;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 448 512',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    d: 'M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z'
  }));
};

var FacebookIcon = function FacebookIcon(_ref) {
  var size = _ref.size,
    color = _ref.color;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 320 512',
    className: styles$1[size]
  }, React__default.createElement("path", {
    className: styles$1[color],
    d: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
  }));
};

var icons = {
  circle: CircleIcon,
  fb: FacebookIcon
};
var Icon = function Icon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    type = _ref.type;
  var Element = icons[type] || icons.circle;
  return React__default.createElement(Element, {
    size: size,
    color: color
  });
};

var styles$2 = {"h1":"_2vqE-","h2":"_3yJwX","h3":"_2P1HB","h4":"_enyR1","body":"_3Qjvi","caption":"_2mgJ7","note":"_WH81j","font-bold":"_3MkhO","font-semibold":"_1HPML","font-medium":"_gEqzI","font-regular":"_3U8jR","display-block":"_31_XB","display-inline":"_3z0dd","align-center":"_r94Hl","align-left":"_f0wLZ","align-right":"_2U2Lp","color-gray":"_3CxI-","color-primary":"_LViNk"};

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

var styles$3 = {"h1":"_2TGE0","h2":"_Aylvo","h3":"_Vl8BK","h4":"_1Y4uE","body":"_2XMaV","caption":"_fcrmL","note":"_3p3FA","font-bold":"_26KrJ","font-semibold":"_3H8wI","font-medium":"_28rw-","font-regular":"_2gPGh","container":"_1pA9x","row":"_2NwDW","bg-white":"_1G--D","bg-tranparent":"_35mKr","bg-background":"_2ixeh","col-1":"_3Mtkz","col-2":"_2pvKu","col-3":"_3OFM2","col-4":"_8OoRv","col-5":"_1BC09","col-6":"_V6Uaz","col-7":"_3R-up","col-8":"_1RFL_","col-9":"_2k-yC","col-10":"_2WQw-","col-11":"_10tsp","col-12":"_JGdcA","br-0":"_bCQwN","br-1":"_1hdBf","br-2":"_2Ln10","br-3":"_5QTZa","br-4":"_2rhBh","br-5":"_15xBj","br-6":"_14kb5","br-7":"_19Qbm","br-8":"_1BQda","br-9":"_1PUO6","br-10":"_1oEo0","br-11":"_2Chmu","br-12":"_rX__V","mt-0":"_3TOOm","mt-1":"_3HIEa","mt-2":"_1nfBk","mt-3":"_adW7p","mt-4":"_12n1Y","mt-5":"_17MgJ","mt-6":"_3Hlj3","mt-7":"_3d0nr","mt-8":"_2rsba","mt-9":"_3LYUW","mt-10":"_FUHlj","mt-11":"_3FGKv","mt-12":"_1uXku","mr-0":"_a61GE","mr-1":"_3EvmB","mr-2":"_gdfxS","mr-3":"_2R_5W","mr-4":"_23-F1","mr-5":"_rZgPI","mr-6":"_3A7KF","mr-7":"_2AJnj","mr-8":"_Gi7P4","mr-9":"_2zhVw","mr-10":"_1fURn","mr-11":"_9Pwrd","mr-12":"_3Y_ec","ml-0":"_3qQNM","ml-1":"_2MZ4b","ml-2":"_1M1qu","ml-3":"_2gT-z","ml-4":"_py_1a","ml-5":"_2w_Qv","ml-6":"_39-pZ","ml-7":"_2Ny6k","ml-8":"_Iw_t6","ml-9":"_1Oeyb","ml-10":"_32nFN","ml-11":"_f9Z2T","ml-12":"_1v_b4","mb-0":"_36YE-","mb-1":"_17p1K","mb-2":"_3qhnl","mb-3":"_10mU4","mb-4":"_2op15","mb-5":"_4csYA","mb-6":"_2AAlt","mb-7":"_1Gb9P","mb-8":"_VTOZd","mb-9":"_1sTrZ","mb-10":"_2i9js","mb-11":"_SlhQA","mb-12":"_3iNTL","pt-0":"_zQUKj","pt-1":"_30I2l","pt-2":"_peK6c","pt-3":"_1_tQo","pt-4":"_2Znqo","pt-5":"_23H7Y","pt-6":"_28OpO","pt-7":"_2w1Yc","pt-8":"_2kdr9","pt-9":"_3OmBg","pt-10":"_hl2sg","pt-11":"_3RyBi","pt-12":"_2xLsG","pr-0":"_3Lsa1","pr-1":"_qDXjQ","pr-2":"_1tIFl","pr-3":"_324I7","pr-4":"_2wwax","pr-5":"_O1uAw","pr-6":"_2kBJQ","pr-7":"_3cQAe","pr-8":"_1I0h5","pr-9":"_ipxjN","pr-10":"_3EvkI","pr-11":"_39XOR","pr-12":"_3Md5r","pl-0":"_1iIFV","pl-1":"_5az6_","pl-2":"_4bzV_","pl-3":"_1HeqZ","pl-4":"_2OUl2","pl-5":"_28YuU","pl-6":"_gmCF2","pl-7":"_2dm-y","pl-8":"_3isW7","pl-9":"_3WwMq","pl-10":"_VRMAX","pl-11":"_1THhH","pl-12":"_2vp-Z","pb-0":"_2GOqt","pb-1":"_vH5nK","pb-2":"_3w957","pb-3":"_W8a69","pb-4":"_1laJC","pb-5":"_3St8Y","pb-6":"_oDUhH","pb-7":"_3XfRG","pb-8":"_2sXp_","pb-9":"_3n7P5","pb-10":"_WO3OM","pb-11":"_1wbxO","pb-12":"_36TLb"};

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
    br = _ref.br;
  return React__default.createElement("div", {
    className: styles$3["row"] + ' ' + styles$3["bg-" + bg] + ' ' + styles$3["br-" + br] + ' ' + styles$3["col-" + col] + ' ' + styles$3["mt-" + mt] + ' ' + styles$3["mr-" + mr] + ' ' + styles$3["mb-" + mb] + ' ' + styles$3["ml-" + ml] + ' ' + styles$3["pt-" + pt] + ' ' + styles$3["pr-" + pr] + ' ' + styles$3["pb-" + pb] + ' ' + styles$3["pl-" + pl]
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
    bg = _ref.bg;
  return React__default.createElement("div", {
    className: styles$3["bg-" + bg] + ' ' + styles$3['container']
  }, children);
};
Container.defaultProps = {
  bg: 'tranparent'
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

var styles$5 = {"h1":"_2jGMV","h2":"_1Rzgv","h3":"_3OyWy","h4":"_3NXlZ","body":"_K6SPz","caption":"_2snYP","note":"_1H8cN","font-bold":"_1MtHz","font-semibold":"_XutCa","font-medium":"_35yzi","font-regular":"_1mW1F","button-1":"_2vxEy"};

var Button = function Button(_ref) {
  var children = _ref.children,
    type = _ref.type,
    id = _ref.id;
  return React__default.createElement("div", {
    id: id,
    className: styles$5["button-" + type]
  }, children);
};
Button.defaultProps = {
  type: '1',
  id: ''
};

exports.Button = Button;
exports.Container = Container;
exports.ExampleButton = ExampleButton;
exports.Heading = Heading;
exports.Icon = Icon;
exports.Label = Label;
exports.Row = Row;
//# sourceMappingURL=index.js.map
