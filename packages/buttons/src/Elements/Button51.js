"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border: 1px solid ${(props) => props.borderColor || '#266DB6'};
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#00132C'};
  font-family: "Avenir Next LT W01 Bold", sans-serif;
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || 700};
  line-height: ${(props) => props.height || '24px'};
  padding: 16px 23px;
  height: ${(props) => props.height || 'auto'};
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: background-color 300ms ease-in;

  &:hover,
  &:active {
    outline: 0;
  }

  &:hover {
    background-color: transparent;
    cursor: pointer;
  }

  &:before {
    background-color: ${(props) => props.pseudoBackgroundColor || '#D5EDF6'};
    content: "";
    height: calc(100% + 3px);
    position: absolute;
    right: -7px;
    top: -9px;
    transition: background-color 300ms ease-in;
    width: 100%;
    z-index: -1;
  }

  &:hover:before {
    background-color: ${(props) => props.hoverPseudoBackgroundColor || '#6DCFF6'}; /* Updated color for hover */
  }

  @media (min-width: 768px) {
    padding: 16px 32px;
  }
};`;
const Button51 = ({ children, backgroundColor, borderColor, textColor, pseudoBackgroundColor, fontSize, height, fontWeight, hoverPseudoBackgroundColor, className }) => {
    return (react_1.default.createElement(StyledButton, { backgroundColor: backgroundColor, borderColor: borderColor, textColor: textColor, pseudoBackgroundColor: pseudoBackgroundColor, fontSize: fontSize, height: height, fontWeight: fontWeight, className: className, hoverPseudoBackgroundColor: hoverPseudoBackgroundColor }, children));
};
exports.default = Button51;
