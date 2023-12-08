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
const StyledGoogleButton = styled_components_1.default.button `
  background-color: ${(props) => props.backgroundColor || '#f8f9fa'};
  border: ${(props) => props.borderWidth ? `${props.borderWidth}px solid ${props.borderColor || '#f8f9fa'}` : 'none'};
  border-radius: 4px;
  color: ${(props) => props.textColor || '#3c4043'};
  cursor: pointer;
  font-family: arial, sans-serif;
  font-size: ${(props) => {
    if (props.size === 'small')
        return '12px';
    if (props.size === 'medium')
        return '14px';
    if (props.size === 'large')
        return '18px';
    if (props.size === 'custom' && props.customSize)
        return props.customSize;
    return '14px'; // Default size
}};

  height: ${(props) => {
    if (props.size === 'small')
        return '28px';
    if (props.size === 'medium')
        return '36px';
    if (props.size === 'large')
        return '48px';
    if (props.size === 'custom' && props.customSize && props.customSize.height) {
        return props.customSize.height;
    }
    return '36px'; // Default height
}};

  line-height: ${(props) => {
    if (props.size === 'small')
        return '20px';
    if (props.size === 'medium')
        return '27px';
    if (props.size === 'large')
        return '36px';
    if (props.size === 'custom' && props.customSize && props.customSize.lineHeight) {
        return props.customSize.lineHeight;
    }
    return '27px'; // Default line height
}};

  min-width: ${(props) => {
    if (props.size === 'small')
        return '40px';
    if (props.size === 'medium')
        return '54px';
    if (props.size === 'large')
        return '72px';
    if (props.size === 'custom' && props.customSize && props.customSize.minWidth) {
        return props.customSize.minWidth;
    }
    return '54px'; // Default min width
}};

  padding: 0 16px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;
  transition: border-color 300ms ease-in, box-shadow 300ms ease-in, color 300ms ease-in;

  &:hover {
    border-color: ${(props) => props.hoverBorderColor || '#dadce0'};
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
    color: #202124;
  }

  &:focus {
    border-color: #4285f4;
    outline: none;
  }
};`;
const GoogleButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(StyledGoogleButton, Object.assign({}, props), children);
};
exports.default = GoogleButton;
