"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  align-self: center;
  background-color: ${(props) => props.backgroundColor || '#fff'};
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#41403e'}; // Use the textColor prop
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: ${(props) => {
    if (props.size === 'small')
        return '0.75rem';
    if (props.size === 'medium')
        return '1rem';
    return '1.25rem';
}}; // Use the size prop
  line-height: 23px;
  outline: none;
  padding: ${(props) => {
    if (props.size === 'small')
        return '0.5rem';
    if (props.size === 'medium')
        return '0.75rem';
    return '1rem';
}}; // Use the size prop
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
const PaperButton = ({ children, backgroundColor, textColor, size, className, }) => {
    return (react_1.default.createElement(StyledButton, { backgroundColor: backgroundColor, textColor: textColor, size: size, className: className }, children));
};
exports.default = PaperButton;
