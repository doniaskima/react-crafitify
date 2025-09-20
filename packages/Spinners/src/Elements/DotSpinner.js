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
const pulse0112 = (0, styled_components_1.keyframes) `
  0%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
`;
const DotSpinnerContainer = styled_components_1.default.div `
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: ${(props) => props.color || '#183153'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
`;
const Dot = styled_components_1.default.div `
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  &::before {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }
};`;
const DotSpinner = ({ className, color }) => {
    return (react_1.default.createElement(DotSpinnerContainer, { className: className, color: color },
        react_1.default.createElement(Dot, null),
        react_1.default.createElement(Dot, { style: { transform: 'rotate(45deg)' } }),
        react_1.default.createElement(Dot, { style: { transform: 'rotate(90deg)' } }),
        react_1.default.createElement(Dot, { style: { transform: 'rotate(135deg)' } }),
        react_1.default.createElement(Dot, { style: { transform: 'rotate(180deg)' } }),
        react_1.default.createElement(Dot, { style: { transform: 'rotate(225deg)' } }),
        react_1.default.createElement(Dot, { style: { transform: 'rotate(270deg)' } }),
        react_1.default.createElement(Dot, { style: { transform: 'rotate(315deg)' } })));
};
exports.default = DotSpinner;
