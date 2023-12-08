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
const StyledAppleButton = styled_components_1.default.button `
  background-image: linear-gradient(${props => props.backgroundColor || '#42A1EC'}, ${props => props.backgroundColor || '#0070C9'});
  border: ${props => props.borderWidth ? `${props.borderWidth}px solid ${props.borderColor || '#0077CC'}` : 'none'};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${props => props.textColor || '#FFFFFF'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  direction: ltr;
  display: block;
  font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '17px'};
  font-weight: 400;
  letter-spacing: -.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 15px;
  text-align: center;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  transition: background-image 300ms ease-in, border-color 300ms ease-in, box-shadow 300ms ease-in;
  
  ${props => props.size === 'small' && `
    font-size: 12px;
    height: 28px;
    line-height: 20px;
    min-width: 40px;
  `}
  
  ${props => props.size === 'medium' && `
    font-size: 14px;
    height: 36px;
    line-height: 27px;
    min-width: 54px;
  `}
  
  ${props => props.size === 'large' && `
    font-size: 18px;
    height: 48px;
    line-height: 36px;
    min-width: 72px;
  `}
  
  &:disabled {
    opacity: 0.3;
  }
  
  &:hover {
    background-image: linear-gradient(${props => props.hoverBackgroundColor || '#51A9EE'}, ${props => props.hoverBackgroundColor || '#147BCD'});
    border-color: ${props => props.hoverBorderColor || '#1482D0'};
    text-decoration: none;
  }
  
  &:active {
    background-image: linear-gradient(${props => props.activeBackgroundColor || '#3D94D9'}, ${props => props.activeBackgroundColor || '#0067B9'});
    border-color: ${props => props.activeBorderColor || '#006DBC'};
    outline: none;
  }

  &:focus {
    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
    outline: none;
  }
`;
const AppleButton = (_a) => {
    var { className, children, disabled } = _a, props = __rest(_a, ["className", "children", "disabled"]);
    return (react_1.default.createElement(StyledAppleButton, Object.assign({ className: className, disabled: disabled }, props), children));
};
exports.default = AppleButton;
