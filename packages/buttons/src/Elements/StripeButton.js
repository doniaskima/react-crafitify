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
const StyledStripeButton = styled_components_1.default.button `
  appearance: button;
  backface-visibility: hidden;
  background-color: ${(props) => props.backgroundColor || '#405cf5'};
  border-radius: 6px;
  border-width: 0;
  box-shadow: ${(props) => props.boxShadow ||
    'rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0'};
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#fff'};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
  font-size: ${(props) => typeof props.fontSize === 'number'
    ? props.fontSize + 'px'
    : props.fontSize || '100%'};
  height: ${(props) => (props.height ? `${props.height}px` : '44px')};
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: ${(props) => (props.width ? `${props.width}px` : '100px')};


  &:disabled {
    cursor: default;
  }

  &:focus {
    box-shadow: ${(props) => props.boxShadow ||
    'rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px'};
  }
`;
const calculateFontSize = (width) => {
    const baseSize = 16; // Default font size
    return width ? Math.min(width / 10, baseSize) : baseSize;
};
const calculateWidth = (width) => {
    return width ? width : 100;
};
const StripeButton = (_a) => {
    var { children, disabled } = _a, props = __rest(_a, ["children", "disabled"]);
    return (react_1.default.createElement(StyledStripeButton, Object.assign({ disabled: disabled }, props), children));
};
exports.default = StripeButton;
