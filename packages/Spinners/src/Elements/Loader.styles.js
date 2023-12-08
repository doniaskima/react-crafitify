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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaderDotsContainder = exports.LoaderRotateContainer = exports.LoaderRingContainer = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const loading = (0, styled_components_1.keyframes) `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const rotation = (0, styled_components_1.keyframes) `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const dotsAnimation = (0, styled_components_1.keyframes) `
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;
exports.LoaderRingContainer = styled_components_1.default.div `
  display: inline-block;
  position: relative;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  & > div {
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    box-sizing: border-box;
    position: absolute;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    margin: auto;
    border: ${(props) => `${props.borderSize}px solid ${props.color}`};
    border-radius: 50%;
    animation: ${loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => `${props.color} transparent transparent transparent`};
  }

  & > div:nth-of-type(1) {
    animation-delay: -0.45s;
  }

  & > div:nth-of-type(2) {
    animation-delay: -0.3s;
  }

  & > div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
`;
exports.LoaderRotateContainer = styled_components_1.default.div `
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  display: inline-block;
  border-top: ${(props) => `${props.borderSize}px solid ${props.color}`};
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
exports.LoaderDotsContainder = styled_components_1.default.div `
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    border-radius: 50%;
    background: ${(props) => props.color};
    position: absolute;
    left: 0;
    top: 0;
    animation: ${dotsAnimation} 2s linear infinite;
  }

  &::after {
    animation-delay: 0.5s;
  }
`;
