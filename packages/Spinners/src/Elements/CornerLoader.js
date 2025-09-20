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
const spin988 = (0, styled_components_1.keyframes) `
  0% {
    transform: scale(1) rotate(0);
  }
  20%, 25% {
    transform: scale(1.3) rotate(90deg);
  }
  45%, 50% {
    transform: scale(1) rotate(180deg);
  }
  70%, 75% {
    transform: scale(1.3) rotate(270deg);
  }
  95%, 100% {
    transform: scale(1) rotate(360deg);
  }
`;
const LoaderContainer = styled_components_1.default.div `
  --dim: ${(props) => props.size || '3rem'};
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: ${spin988} 2s linear infinite;
`;
const Circle = styled_components_1.default.div `
  --dim: ${(props) => props.size || '1.2rem'};
  width: var(--dim);
  height: var(--dim);
  background-color: ${(props) => props.color || '#333'};
  border-radius: 50%;
  position: absolute;
`;
const TopLeftCircle = (0, styled_components_1.default)(Circle) `
  top: 0;
  left: 0;
`;
const TopRightCircle = (0, styled_components_1.default)(Circle) `
  top: 0;
  right: 0;
`;
const BottomLeftCircle = (0, styled_components_1.default)(Circle) `
  bottom: 0;
  left: 0;
`;
const BottomRightCircle = (0, styled_components_1.default)(Circle) `
  bottom: 0;
  right: 0;
`;
const CornerLoader = ({ color, size, className }) => {
    return (react_1.default.createElement(LoaderContainer, { className: className },
        react_1.default.createElement(TopLeftCircle, { color: color, size: size }),
        react_1.default.createElement(TopRightCircle, { color: color, size: size }),
        react_1.default.createElement(BottomLeftCircle, { color: color, size: size }),
        react_1.default.createElement(BottomRightCircle, { color: color, size: size })));
};
exports.default = CornerLoader;
