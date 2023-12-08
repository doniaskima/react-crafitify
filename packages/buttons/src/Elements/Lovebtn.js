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
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: ${(props) => {
    if (props.size === 'small')
        return '10px 15px';
    if (props.size === 'medium')
        return '20px 25px 20px 22px';
    return '30px 35px 30px 32px';
}};
  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #e8e8e8;
  border-color: #ffe2e2;
  border-style: solid;
  border-width: 9px;
  border-radius: 35px;
  font-size: 25px;
  font-weight: 900;
  color: rgb(134, 124, 124);
  font-family: monospace;
  transition: transform 400ms cubic-bezier(.68,-0.55,.27,2.5), 
    border-color 400ms ease-in-out,
    background-color 400ms ease-in-out;
  word-spacing: -2px;

  &:hover {
    background-color: #eee;
    transform: scale(1.05);
    animation: ${(0, styled_components_1.keyframes) `
      0% {
        border-color: #fce4e4;
      }
    
      50% {
        border-color: #ffd8d8;
      }
    
      90% {
        border-color: #fce4e4;
      }
    `} 3s infinite;
  }
`;
const FilledHeart = styled_components_1.default.svg `
  fill: rgb(255, 110, 110);
  transition: opacity 100ms ease-in-out;

  ${StyledButton}:hover & {
    opacity: 1;
  }
`;
const EmptyHeart = styled_components_1.default.svg `
  fill: rgb(255, 110, 110);
  transition: opacity 100ms ease-in-out;

  ${StyledButton}:hover & {
    opacity: 0;
  }
`;
const Lovebtn = (_a) => {
    var { children, size } = _a, rest = __rest(_a, ["children", "size"]);
    return (react_1.default.createElement(StyledButton, Object.assign({ size: size }, rest),
        react_1.default.createElement(FilledHeart, { className: "filled", height: "32", width: "32", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M0 0H24V24H0z", fill: "none" }),
            react_1.default.createElement("path", { d: "M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" })),
        children));
};
exports.default = Lovebtn;
