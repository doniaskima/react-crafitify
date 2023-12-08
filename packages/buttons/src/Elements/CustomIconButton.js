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
  position: relative;
  display: flex;
  align-items: center;
  cursor:pointer;
  justify-content: center;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  background: ${props => props.backgroundColor || '#6a92ef'};
  color: ${props => props.textColor || 'white'};
  padding: ${props => {
    switch (props.size) {
        case 'small':
            return '0.9rem 2rem';
        case 'medium':
            return '1.2rem 2.5rem';
        case 'large':
        default:
            return '1.5rem 3rem';
    }
}};
  border-radius: 2rem;
  transition: 0.5s;
  border: none;

  &:after {
    content: '';
    width: 80%;
    height: 40%;
    background: linear-gradient(
      80deg,
      ${props => props.hoverColor || 'hsl(217, 77%, 71%)'} 10%,
      ${props => props.activeColor || 'hsl(218, 76%, 84%)'} 48%
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    margin: 0 auto;
    border-radius: 2rem;
    filter: blur(8px);
    z-index: -9;
    opacity: 0;
    transition: opacity 0.4s;
  }

  .text {
    position: relative;
    z-index: 10;
  }

  svg {
    position: absolute;
    inset: 0;
    margin: auto;
    pointer-events: none;
    transition: 0.6s;
    opacity: 0;
  }

  svg.star {
    width: 18px;
    transform: translate(-25px, -6px) rotate(55deg);
    filter: blur(0.4px);
    color: ${props => props.activeColor || 'hsl(210, 40%, 47%)'};
  }

  svg.moon {
    width: 18px;
    transform: translate(7px, -14px) rotate(80deg);
    filter: blur(0.5px);
    color: ${props => props.activeColor || 'hsl(210, 40%, 47%)'};
  }

  svg.meteor {
    width: 16px;
    transform: translate(34px, -4px) rotate(-45deg);
    filter: blur(0.4px);
    color: ${props => props.activeColor || 'hsl(210, 40%, 47%)'};
  }

  &:active {
    color: #ffffff;
    transform: scale(1.2);
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.3);
  }

  &:hover svg {
    opacity: 1;
  }

  &:hover svg.star {
    transform: translate(-55px, -20px) rotate(55deg) scale(1.8);
  }

  &:hover svg.moon {
    transform: translate(50px, -32px) rotate(0deg) scale(1.4);
  }

  &:hover svg.meteor {
    transform: translate(28px, 30px) rotate(260deg) scale(2);
  }
`;
const CustomIconButton = (_a) => {
    var rest = __rest(_a, []);
    return react_1.default.createElement(StyledButton, Object.assign({}, rest));
};
exports.default = CustomIconButton;
