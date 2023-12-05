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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${props => {
    switch (props.size) {
        case 'small':
            return '10px 20px';
        case 'medium':
            return '15px 30px';
        case 'large':
        default:
            return '20px 40px';
    }
}};
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.textColor || '#fff'};
  background: ${props => props.backgroundColor || 'black'};
  border: none;
  letter-spacing: 2px;
  font-size: 17px;
  overflow: hidden;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.hoverColor || '#03a'};
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: bottom right;
    transform: scale(0);
  }

  &:hover:before {
    transition: transform 0.5s;
    transform-origin: top left;
    transform: scale(1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid #fff;
    box-sizing: border-box;
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: bottom right;
    transform: scale(1);
  }

  &:hover:after {
    transition: transform 0.5s;
    transform-origin: top left;
    transform: scale(0);
  }
`;
const HoverEffectButton = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return react_1.default.createElement(StyledButton, Object.assign({}, rest), children);
};
exports.default = HoverEffectButton;
