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
  100% {
    transform: rotate(calc(var(--s, 1) * 1turn));
  }
`;
const LoaderWrapper = styled_components_1.default.div `
  width: ${(props) => (props.size ? props.size : '60px')};
  height: ${(props) => (props.size ? props.size : '30px')};
  display: grid;
  --c: #0000 calc(100% - 5px), #000 calc(100% - 4px) 96%, #0000;
  background: radial-gradient(farthest-side at bottom, var(--c)) 0 0,
    radial-gradient(farthest-side at top, var(--c)) 100% 100%;
  background-size: calc(50% + 2px) 50%;
  background-repeat: no-repeat;
  animation: ${loaderAnimation} 1.5s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    background: inherit;
    animation: inherit;
    animation-duration: 2s;
  }

  &::after {
    --s: -1;
  }
};`;
const Hypnotic = ({ size }) => {
    return react_1.default.createElement(LoaderWrapper, { size: size });
};
exports.default = Hypnotic;
