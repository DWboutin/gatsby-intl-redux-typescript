"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

const Container = _styledComponents.default.button`
  background-color: ${props => props.variant === 'primary' ? '#fff' : 'blue'};
  color: black;

  &:hover {
    background-color: red;
  }
`;

const Button = ({
  children,
  ...props
}) => {
  return _react.default.createElement(Container, props, children);
};

Button.defaultProps = {
  variant: 'primary'
};
var _default = Button;
exports.default = _default;