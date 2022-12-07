import { createElement } from 'react';

var styles = {"test":"_3ybTi"};

var styles$1 = {"type-3":"_12LKd"};

var ExampleButton = function ExampleButton(_ref) {
  var text = _ref.text,
    type = _ref.type;
  return createElement("div", {
    className: styles$1[type]
  }, text);
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { ExampleButton, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
