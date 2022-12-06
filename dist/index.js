var React = require('react');

var styles = {"test":"_3ybTi"};

var styles$1 = {"type-1":"_1zSmH","type-2":"_m_qPR"};

var ExampleButton = function ExampleButton(_ref) {
  var text = _ref.text,
    type = _ref.type;
  return React.createElement("div", {
    className: styles$1[type]
  }, text);
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.ExampleButton = ExampleButton;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
