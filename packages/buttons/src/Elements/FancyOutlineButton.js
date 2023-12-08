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
const StyledButton = styled_components_1.default.button `
  outline: none;
  cursor:pointer;
  color: ${(props) => props.color || '#DAA06D'};
  padding: ${(props) => {
    if (props.size === 'large')
        return '1.5rem';
    if (props.size === 'small')
        return '0.5rem';
    return '1rem';
}};
  border: 2px dashed ${(props) => props.color || '#DAA06D'};
  border-radius: 15px;
  background-color: #EADDCA;
  box-shadow: 0 0 0 4px #EADDCA, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: 0.1s ease-in-out, 0.4s color;

  &:hover {
    color: ${(props) => props.hoverColor || props.color || '#DAA06D'};
  }

  &:active {
    transform: translateX(0.1em) translateY(0.1em);
    box-shadow: 0 0 0 4px #EADDCA, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
    color: ${(props) => props.activeColor || props.hoverColor || props.color || '#DAA06D'};
  }
}`;
const FancyOutlineButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(StyledButton, Object.assign({}, props), children));
};
exports.default = FancyOutlineButton;
