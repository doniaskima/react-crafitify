"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  --green: #1BFD9C;
  font-size: ${props => props.size || '15px'}; // Use props.size for font size
  padding: 0.7em 2.7em; // Default padding
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid ${props => props.backgroundColor || 'var(--green)'};
  background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%, transparent 60%, rgba(27, 253, 156, 0.1) 100%);
  color: ${props => props.textColor || 'var(--green)'};
  box-shadow: inset 0 0 10px ${props => props.shadowColor || 'rgba(27, 253, 156, 0.4)'}, 0 0 9px 3px ${props => props.shadowColor || 'rgba(27, 253, 156, 0.1)'};
  
  
  &:hover {
    color: ${props => props.hoverColor || '#82ffc9'};
    box-shadow: inset 0 0 10px ${props => props.boxShadowColor || 'rgba(27, 253, 156, 0.6)'}, 0 0 9px 3px ${props => props.shadowColor || 'rgba(27, 253, 156, 0.2)'};
  }
  
  &:before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform .4s ease-in-out;
    background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%, rgba(27, 253, 156, 0.1) 60%, transparent 100%);
  }
  
  &:hover:before {
    transform: translateX(15em);
  }
`;
const ReadyButton = (props) => {
    return (react_1.default.createElement(StyledButton, Object.assign({}, props), "I'M READY"));
};
exports.default = ReadyButton;
