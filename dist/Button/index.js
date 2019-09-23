"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

const StyledButton = _styledComponents.default.button`
  background-color: #fff;
  color: black;

  &:hover {
    background-color: red;
  }
`;

const Button = ({
  children
}) => {
  return _react.default.createElement(StyledButton, null, children);
};

var _default = Button;
exports.default = _default;