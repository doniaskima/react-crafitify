"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const RainbowFilll = styled_components_1.default.button `
  ${({ gradient }) => gradient &&
    (0, styled_components_1.css) `
      background: linear-gradient(90deg, ${gradient.start}, ${gradient.end});
    `}
  border-radius: 999px;
  box-sizing: border-box;
  color: ${({ textColor }) => textColor || '#000'};
  display: block;
  font-weight: 900;
  overflow: hidden;
  padding: ${({ padding }) => padding || '1.8rem 5rem'};
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 100%;
  line-height: 1.5;
  margin: 0;

  &:disabled {
    cursor: default;
  }

  svg {
    display: block;
    vertical-align: middle;
  }

  [hidden] {
    display: none;
  }

  span {
    background: ${({ textBackground }) => textBackground || '#1e293b'};
    border-radius: 999px;
    color: #fff;
    display: grid;
    inset: 5px;
    place-items: center;
    position: absolute;
    transition: background 0.3s;
  }

  &:hover span {
    background: none;
  }
}`;
const RainbowFill = ({ className, children, gradient, textColor, textBackground, padding }) => {
    return (react_1.default.createElement(RainbowFilll, { className: className, gradient: gradient, textColor: textColor, textBackground: textBackground, padding: padding },
        react_1.default.createElement("span", null, children)));
};
exports.default = RainbowFill;
