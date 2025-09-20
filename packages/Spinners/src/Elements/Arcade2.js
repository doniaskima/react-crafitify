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
const loaderAnimation = (0, styled_components_1.keyframes) `
  0%, 25% { background-size: 50% 100%; }
  25.1%, 75% { background-size: 0 0, 50% 100%; }
  75.1%, 100% { background-size: 0 0, 0 0; }
`;
const loaderBeforeAnimation = (0, styled_components_1.keyframes) `
  25% {
    background-position: bottom, bottom 54px left 0, bottom 3px left 0, bottom 0 left 50%;
    left: 0;
  }
  25.1% {
    background-position: bottom, bottom 10px left 0, bottom 3px left 0, bottom 0 left 50%;
    left: 0;
  }
  50% {
    background-position: bottom, bottom 10px left 0, bottom 3px left 0, bottom 0 left 50%;
    left: calc(100% - 22px);
  }
  75% {
    background-position: bottom, bottom 54px left 0, bottom 3px left 0, bottom 0 left 50%;
    left: calc(100% - 22px);
  }
  75.1% {
    background-position: bottom, bottom 10px left 0, bottom 3px left 0, bottom 0 left 50%;
    left: calc(100% - 22px);
  }
`;
const LoaderWrapper = styled_components_1.default.div `
  width: fit-content;
  font-size: 17px;
  font-family: monospace;
  line-height: 1.4;
  font-weight: bold;
  background:
    linear-gradient(#000 0 0) left,
    linear-gradient(#000 0 0) right;
  background-repeat: no-repeat;
  border-right: 5px solid #0000;
  border-left: 5px solid #0000;
  background-origin: border-box;
  position: relative;
  animation: ${loaderAnimation} 2s infinite;
  &::before {
    content: "Loading";
  }
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 22px;
    height: 60px;
    background:
      linear-gradient(90deg, #000 4px, #0000 0 calc(100% - 4px), #000 0) bottom / 22px 20px,
      linear-gradient(90deg, red 4px, #0000 0 calc(100% - 4px), red 0) bottom 10px left 0 / 22px 6px,
      linear-gradient(#000 0 0) bottom 3px left 0 / 22px 8px,
      linear-gradient(#000 0 0) bottom 0 left 50% / 8px 16px;
    background-repeat: no-repeat;
    animation: ${loaderBeforeAnimation} 2s infinite;
  }
`;
const Arcade2 = () => {
    return react_1.default.createElement(LoaderWrapper, null);
};
exports.default = Arcade2;
