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
const spinnerAnimation = (0, styled_components_1.keyframes) `
  0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  }
  50% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
  }
`;
const SpinnerContainer = styled_components_1.default.div `
  position: absolute;
  width: ${(props) => props.size || '9px'};
  height: ${(props) => props.size || '9px'};
`;
const SpinnerDiv = styled_components_1.default.div `
  position: absolute;
  width: 50%;
  height: 150%;
  background: ${(props) => props.color || '#000000'};
  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  animation: ${spinnerAnimation} 1s calc(var(--delay) * 1s) infinite ease;
`;
const CircleLoader = ({ color, size, className }) => {
    return (react_1.default.createElement(SpinnerContainer, { className: `spinner ${className}`, size: size }, [...Array(10)].map((_, index) => (react_1.default.createElement(SpinnerDiv, { key: index, color: color, style: {
            '--delay': (index + 1) * 0.1,
            '--rotation': (index + 1) * 36,
            '--translation': 150,
        } })))));
};
exports.default = CircleLoader;
