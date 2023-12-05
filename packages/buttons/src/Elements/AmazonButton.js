"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledAmazonButton = styled_components_1.default.button `
  background-color: ${(props) => props.backgroundColor || '#fff'};
  border: 1px solid ${(props) => props.borderColor || '#d5d9d9'};
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#0f1111'};
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", sans-serif;
  font-size: ${(props) => props.fontSize || 13}px;
  line-height: 29px;
  padding: 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: ${(props) => props.width || '100px'};
  transition: background-color 300ms ease-in, border-color 300ms ease-in, box-shadow 300ms ease-in;
  
  &:hover {
    background-color: #f7fafa;
  }
  
  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
    outline: 0;
  }
`;
const AmazonButton = (props) => {
    return react_1.default.createElement(StyledAmazonButton, Object.assign({}, props), props.children);
};
exports.default = AmazonButton;
