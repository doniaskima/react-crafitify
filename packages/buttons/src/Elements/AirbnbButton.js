"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const calculateFontSize = (width, height) => {
    const baseSize = 16; // Default font size
    const buttonSize = width || height || baseSize; // Use width or height if available, otherwise default
    return Math.max(buttonSize / 8, baseSize); // Ensure font size is proportional but not too small
};
const StyledAirbnbButton = styled_components_1.default.button `
  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  border: ${(props) => props.borderWidth || 1}px solid ${(props) => props.borderColor || '#222222'};
  border-radius: ${(props) => props.borderRadius || 8}px;
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#222222'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: ${(props) => props.fontSize || calculateFontSize(props.width, props.height)}px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  
  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || '#F7F7F7'};
    border-color: ${(props) => props.hoverBorderColor || '#000000'};
  }

  &:active {
    background-color: #F7F7F7;
    border-color: #000000;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: #DDDDDD;
    color: #DDDDDD;
    cursor: not-allowed;
    opacity: 1;
  }
`;
const AirbnbButton = (_a) => {
    var { children, className, disabled } = _a, props = __rest(_a, ["children", "className", "disabled"]);
    return (react_1.default.createElement(StyledAirbnbButton, Object.assign({ disabled: disabled, className: className }, props), children));
};
exports.default = AirbnbButton;
