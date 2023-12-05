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
const ButtonWrapper = styled_components_1.default.button `
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ textColor }) => textColor || '#fff'};
  padding: 15px 25px;
  background-color: ${({ bgColor }) => bgColor || '#38D2D2'};
  background-image: radial-gradient(
      93% 87% at 87% 89%,
      rgba(0, 0, 0, 0.23) 0%,
      transparent 86.18%
    ),
    radial-gradient(
      66% 66% at 26% 20%,
      rgba(255, 255, 255, 0.55) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25),
    inset 0px 3px 9px rgba(255, 255, 255, 0.3),
    inset 0px 1px 1px rgba(255, 255, 255, 0.6),
    inset 0px -8px 36px rgba(0, 0, 0, 0.3),
    inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  border: 0;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
`;
const GradientButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(ButtonWrapper, Object.assign({}, props), children);
};
exports.default = GradientButton;
