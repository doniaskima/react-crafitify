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
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledDuolingoButton = styled_components_1.default.button `
  background-color: ${(props) => props.backgroundColor || '#1899D6'};
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  color: ${(props) => props.textColor || '#FFFFFF'};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  width: ${(props) => props.width || 'auto'};  
  height: ${(props) => props.height || 'auto'}; 

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 16px;
    border-width: 0 0 4px;
    border: solid transparent;
    background-color: ${(props) => props.hoverBackgroundColor || '#1CB0F6'};
  }

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }

  &:disabled {
    cursor: auto;
  }
`;
const DuolingoButton = (_a) => {
    var { children, disabled } = _a, props = __rest(_a, ["children", "disabled"]);
    const buttonRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (buttonRef.current) {
            const textWidth = buttonRef.current.getBoundingClientRect().width;
            buttonRef.current.style.width = `${textWidth}px`;
        }
    }, [children]);
    return (react_1.default.createElement(StyledDuolingoButton, Object.assign({ ref: buttonRef, disabled: disabled }, props), children));
};
exports.default = DuolingoButton;
