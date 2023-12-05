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
  padding: ${(props) => {
    if (props.size === 'large')
        return '1.5rem';
    if (props.size === 'small')
        return '0.5rem';
    return '1rem';
}};
  border-radius: 15px;
  font-weight: bold;
  transition: 0.4s ease-in-out;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.2);
  border: none;
  letter-spacing: ${(props) => props.letterSpacing || '0.2em'};
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  &:hover {
    letter-spacing: ${(props) => props.hoverLetterSpacing || '0.5em'};
    transform: translateY(-0.8em);
    background-color: ${(props) => props.hoverBackgroundColor || '#171717'}; // Use the hoverBackgroundColor prop
    color: ${(props) => props.hoverColor || 'white'};
  }

  &:active {
    letter-spacing: ${(props) => props.activeLetterSpacing || '0.4em'};
    transition: 0.1s all;
    transform: translateY(-0.6em);
    background-color: #171717;
    color: ${(props) => props.activeColor || 'white'};
  }
}`;
const FancyLetterSpacingButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(StyledButton, Object.assign({}, props), children));
};
exports.default = FancyLetterSpacingButton;
