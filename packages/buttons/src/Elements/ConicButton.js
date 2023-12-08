"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledConicButton = styled_components_1.default.button `
  --b: 3px;
  --s: .45em;
  --color: ${(props) => props.color || '#373B44'};
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: ${(props) => props.fontSize || '16px'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: .05em;
  }

  &:active {
    background: var(--color);
    color: #fff;
  }
`;
const ConicButton = ({ children, className, color, fontSize, width, height }) => {
    return (react_1.default.createElement(StyledConicButton, { color: color, fontSize: fontSize, className: className, width: width, height: height }, children));
};
exports.default = ConicButton;
