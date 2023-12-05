"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  background-color: ${(props) => props.backgroundColor || '#43bccc'};
  color: ${(props) => props.textColor || 'green'};
  border-radius: 100px;
  box-shadow: ${(props) => props.boxShadowBase ||
    'rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,' +
        'rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,' +
        'rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,' +
        'rgba(44, 187, 99, 0.15) 0 16px 32px'};
  color: ${(props) => props.textColor || 'green'};
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: ${(props) => props.fontSize || '16px'};
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  ${(props) => props.hoverEffect &&
    `
    &:hover {
      box-shadow: ${props.boxShadow || props.boxShadowBase ||
        'rgba(44, 187, 99, 0.25)'}; // Default value
      transform: ${props.hoverTransform || 'scale(1.05) rotate(-1deg)'};
    }
  `}
`;
const ElevatedButton = ({ children, backgroundColor, textColor, fontSize, hoverEffect, boxShadow, hoverTransform, boxShadowBase, className, }) => {
    return (react_1.default.createElement(StyledButton, { backgroundColor: backgroundColor, textColor: textColor, fontSize: fontSize, hoverEffect: hoverEffect, boxShadow: boxShadow, hoverTransform: hoverTransform, boxShadowBase: boxShadowBase, className: className }, children));
};
exports.default = ElevatedButton;
