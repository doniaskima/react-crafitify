"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const SecondaryButtonWrapper = styled_components_1.default.button `
  padding: 8px 16px;
  font-size: 16px;
  background-color: #f0f0f0;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;
const SecondaryButton = ({ onClick, disabled, className, children }) => {
    return (react_1.default.createElement(SecondaryButtonWrapper, { onClick: onClick, disabled: disabled, className: className }, children));
};
exports.default = SecondaryButton;
