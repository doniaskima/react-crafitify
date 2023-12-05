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
const ButtonContainer = styled_components_1.default.button `
  --height: 4rem;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  border: 1px solid;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  height: var(--height);
  overflow: hidden;
  padding: 0 3rem;
  position: relative;
  text-transform: uppercase;
  border-radius: 0;
  position: relative;

  span {
    font-weight: 900;
    mix-blend-mode: difference;
  }

  &::before {
    --middle: calc(var(--height) / 2);
    background: #fff;
    content: "";
    height: 100%;
    left: calc(var(--height) * -1);
    position: absolute;
    top: 0;
    transform: rotate(-90deg);
    transform-origin: var(--middle) var(--middle);
    transition: transform 0.3s;
    width: calc(100% + var(--height));
    z-index: -1;
  }

  &:hover::before {
    transform: rotate(0deg);
  }
`;
const SlantedButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(ButtonContainer, Object.assign({}, props), children);
};
exports.default = SlantedButton;
