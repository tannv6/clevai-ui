var React = require('react');

var styles = {"test":"_3ybTi"};

var styles$1 = {"type-1":"_33j4F","type-2":"_3yQao"};

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
