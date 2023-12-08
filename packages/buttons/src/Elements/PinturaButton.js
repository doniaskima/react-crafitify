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
const StyledPinturaButton = styled_components_1.default.button `
  background: ${(props) => props.background || 'linear-gradient(to bottom right, #EF4765, #FF9A5A)'};
  border: 0;
  border-radius: 12px;
  color: ${(props) => props.textColor || '#FFFFFF'};
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  box-shadow: ${(props) => props.boxShadow || 'none'};
  box-shadow-color: ${(props) => props.boxShadowColor || 'rgba(0, 0, 0, 0.5)'}; // Use the boxShadowColor prop

  &:not([disabled]):focus {
    box-shadow: 0 0 0.25rem ${(props) => props.boxShadowColor || 'rgba(0, 0, 0, 0.5)'}, -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5), 0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem ${(props) => props.boxShadowColor || 'rgba(0, 0, 0, 0.5)'}, -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5), 0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
    background: ${(props) => props.hoverBackground || props.background || 'linear-gradient(to bottom right, #EF4765, #FF9A5A)'};
  }
};`;
const PinturaButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(StyledPinturaButton, Object.assign({}, props), children);
};
exports.default = PinturaButton;
