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
const StyledMacOsButton = styled_components_1.default.button `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: ${(props) => props.textColor || '#3D3D3D'};
  background: ${(props) => props.backgroundColor || '#fff'};
  border: ${(props) => `${props.borderWidth || 0}px solid ${props.borderColor || 'transparent'}`};
  box-shadow: ${(props) => props.boxShadow || '0px 0.5px 1px rgba(0, 0, 0, 0.1)'};
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  outline: none;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => {
    if (props.size === 'small')
        return '30px';
    if (props.size === 'medium')
        return '40px';
    if (props.size === 'large')
        return '50px';
    return props.height || 'auto';
}};

  &:focus {
    box-shadow: ${(props) => `${props.boxShadow || '0px 0.5px 1px rgba(0, 0, 0, 0.1)'}, 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5)`};
  }
`;
const MacOsButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(StyledMacOsButton, Object.assign({}, props), children);
};
exports.default = MacOsButton;
