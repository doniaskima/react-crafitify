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
const ScottButtonWrapper = styled_components_1.default.button `
  --border-color: ${props => props.borderColor || '#18181a'};
  --text-color: ${props => props.textColor || '#18181a'};
  --hover-bg-color: ${props => props.hoverBgColor || 'black'};
  --hover-text-color: ${props => props.hoverTextColor || 'white'};

  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  display: inline-block;
  font-size: ${props => {
    if (props.size === 'small')
        return '12px';
    if (props.size === 'medium')
        return '15px';
    if (props.size === 'large')
        return '18px';
    return '15px';
}};
  line-height: 15px;
  padding: 18px 18px 17px;
  text-decoration: none;
  cursor: pointer;
  background: #fff;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  span:first-child {
    position: relative;
    transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 10;
  }

  span:last-child {
    color: var(--hover-text-color);
    display: block;
    position: absolute;
    bottom: 0;
    transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 100;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translateY(225%) translateX(-50%);
    height: 14px;
    line-height: 13px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--hover-bg-color);
    transform-origin: bottom center;
    transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
    transform: skewY(9.3deg) scaleY(0);
    z-index: 50;
  }

  &:hover:after {
    transform-origin: bottom center;
    transform: skewY(9.3deg) scaleY(2);
  }

  &:hover span:last-child {
    transform: translateX(-50%) translateY(-100%);
    opacity: 1;
    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
  }
`;
const ScottButton = (_a) => {
    var { children, altText } = _a, props = __rest(_a, ["children", "altText"]);
    return (react_1.default.createElement(ScottButtonWrapper, Object.assign({}, props),
        react_1.default.createElement("span", { className: "text" }, children),
        react_1.default.createElement("span", null, altText)));
};
exports.default = ScottButton;
