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
const ShadowButtonWrapper = styled_components_1.default.button `
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.textColor || '#000'};
  cursor: pointer;
  border: ${props => props.border || '3px solid'};
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: top 0.2s, left 0.2s, box-shadow 0.2s, color 0.2s, border 0.2s;
  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  &:hover {
    color: ${props => props.hoverTextColor || props.textColor || '#000'};
    border: ${props => props.hoverBorder || props.border || '3px solid'};
    background-color: ${props => props.hoverBackgroundColor || 'transparent'};
  }

  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;
const ShadowButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(ShadowButtonWrapper, Object.assign({}, props), children);
};
exports.default = ShadowButton;
