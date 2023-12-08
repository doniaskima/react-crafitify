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
const StyledCoinbaseButton = styled_components_1.default.button `
  appearance: button;
  background-color: ${(props) => props.backgroundColor || '#1652F0'};
  border: 1px solid ${(props) => props.borderColor || '#1652F0'};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#FFFFFF'};
  cursor: pointer;
  font-family: Graphik, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: ${(props) => props.fontSize || '14px'};
  line-height: 1.15;
  overflow: visible;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height || 'auto'};

  &:disabled {
    opacity: 0.5;
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${(props) => props.backgroundColor || '#0A46E4'};
    border-color: ${(props) => props.borderColor || '#0A46E4'};
  }

  &:active {
    background-color: ${(props) => props.backgroundColor || '#0039D7'};
    border-color: ${(props) => props.borderColor || '#0039D7'};
  }
`;
const CoinbaseButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(StyledCoinbaseButton, Object.assign({}, props), children);
};
exports.default = CoinbaseButton;
