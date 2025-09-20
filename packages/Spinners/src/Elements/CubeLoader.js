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
  0%, 100% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }
`;
const SpinnerContainer = styled_components_1.default.div `
  width: ${(props) => props.size || '44px'};
  height: ${(props) => props.size || '44px'};
  animation: ${spinnerAnimation} 2s infinite ease;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    background-color: ${(props) => props.color || 'rgba(221, 0, 213, 1)'};
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid ${(props) => props.borderColor || 'rgba(49, 13, 90, 1)'};
  }

  & > div:nth-of-type(1) {
    transform: translateZ(-22px) rotateY(180deg);
  }

  & > div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  & > div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  & > div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  & > div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  & > div:nth-of-type(6) {
    transform: translateZ(22px);
  }
`;
const CubeLoader = ({ color, borderColor, size, className }) => {
    return (react_1.default.createElement(SpinnerContainer, { color: color, borderColor: borderColor, size: size, className: className }, [...Array(6)].map((_, index) => (react_1.default.createElement("div", { key: index })))));
};
exports.default = CubeLoader;
