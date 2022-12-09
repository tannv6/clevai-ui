import React__default, { createElement } from 'react';

var styles = {"test":"_3ybTi"};

var styles$1 = {"h1":"_xaQ6C","h2":"_5q2Fq","h3":"_2PZyB","h4":"_2DE81","body":"_2ku65","caption":"_yHFhW","note":"_1T55e","font-bold":"_6Y5t4","font-semibold":"_kUJg-","font-medium":"_2v2vc","font-regular":"_12YgX","type-1":"_33j4F","type-2":"_3yQao"};

var ExampleButton = function ExampleButton(_ref) {
  var text = _ref.text,
    type = _ref.type;
  return createElement("div", {
    className: styles$1[type]
  }, text);
};

var styles$2 = {"h1":"_fX5D2","h2":"_3q58I","h3":"_2iC0F","h4":"_1aDJq","body":"_tfaPw","caption":"_3rauF","note":"_3E5Cb","font-bold":"_3eTmN","font-semibold":"_2ouck","font-medium":"_3esy5","font-regular":"_1GwCX","xs":"_4983V","sm":"_2I7Rh","md":"_1zYyk","lg":"_3tJsu","xl":"_1j3h4","primary":"_DSHY6","secondary":"_3b0Z8","gray":"_1MXMB"};

var CircleIcon = function CircleIcon(_ref) {
  var size = _ref.size,
    color = _ref.color;
  return React__default.createElement("svg", {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 448 512',
    className: styles$2[size]
  }, React__default.createElement("defs", null), React__default.createElement("path", {
    className: styles$2[color],
    d: 'M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z'
  }));
};

var styles$3 = {"h1":"_2vqE-","h2":"_3yJwX","h3":"_2P1HB","h4":"_enyR1","body":"_3Qjvi","caption":"_2mgJ7","note":"_WH81j","font-bold":"_3MkhO","font-semibold":"_1HPML","font-medium":"_gEqzI","font-regular":"_3U8jR"};

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
    font = _ref.font;
  if (TYPES.h1 === type) {
    return React__default.createElement("h1", {
      className: styles$3[type] + " " + styles$3['font-' + font]
    }, children);
  }
  if (TYPES.h2 === type) {
    return React__default.createElement("h2", {
      className: styles$3[type] + " " + styles$3['font-' + font]
    }, children);
  }
  if (TYPES.h3 === type) {
    return React__default.createElement("h3", {
      className: styles$3[type] + " " + styles$3['font-' + font]
    }, children);
  }
  if (TYPES.h4 === type) {
    return React__default.createElement("h4", {
      className: styles$3[type] + " " + styles$3['font-' + font]
    }, children);
  }
  if (TYPES.body === type) {
    return React__default.createElement("p", {
      className: styles$3[type] + " " + styles$3['font-' + font]
    }, children);
  }
  if (TYPES.caption === type) {
    return React__default.createElement("p", {
      className: styles$3[type] + " " + styles$3['font-' + font]
    }, children);
  }
  if (TYPES.note === type) {
    return React__default.createElement("label", {
      className: styles$3[type] + " " + styles$3['font-' + font]
    }, children);
  }
  return React__default.createElement("p", {
    className: styles$3[type] + " " + styles$3['font-' + font]
  }, children);
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { CircleIcon, ExampleButton, ExampleComponent, Heading };
//# sourceMappingURL=index.modern.js.map
