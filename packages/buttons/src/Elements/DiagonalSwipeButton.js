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
// Use the defined interface in the styled component
const StyledButton = styled_components_1.default.button `
  color: ${(props) => props.textColor || 'purple'};
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid ${(props) => props.borderColor || 'purple'};
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || '17px'};
  font-weight: bold;
  background: transparent;
  position: relative;
  transition: all 1s;
  overflow: hidden;
  border-radius: ${(props) => props.borderRadius || '0'};
  cursor: pointer;
  width: ${(props) => props.width || 'auto'}; 
  height: ${(props) => props.height || 'auto'};  
  &:hover {
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -40px;
    transform: skewX(45deg);
    background-color: ${(props) => props.hoverColor || 'purple'};
    z-index: -1;
    transition: all 1s;
  }

  &:hover::before {
    width: 160%;
  }
};`;
const DiagonalSwipeButton = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return react_1.default.createElement(StyledButton, Object.assign({}, rest), children);
};
exports.default = DiagonalSwipeButton;
