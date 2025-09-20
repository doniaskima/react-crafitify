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
const loaderTextAnimation = (0, styled_components_1.keyframes) `
  0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }

  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }

  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }

  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }

  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
`;
const loadingAnimation = (0, styled_components_1.keyframes) `
  0% {
    width: 16px;
    transform: translateX(0px);
  }

  40% {
    width: 100%;
    transform: translateX(0px);
  }

  80% {
    width: 16px;
    transform: translateX(64px);
  }

  90% {
    width: 100%;
    transform: translateX(0px);
  }

  100% {
    width: 16px;
    transform: translateX(0px);
  }
`;
const loading2Animation = (0, styled_components_1.keyframes) `
  0% {
    transform: translateX(0px);
    width: 16px;
  }

  40% {
    transform: translateX(0%);
    width: 80%;
  }

  80% {
    width: 100%;
    transform: translateX(0px);
  }

  90% {
    width: 80%;
    transform: translateX(15px);
  }

  100% {
    transform: translateX(0px);
    width: 16px;
  }
`;
const LoaderContainer = styled_components_1.default.div `
width: ${(props) => props.size || '80px'};
height: ${(props) => (props.size ? `calc(${props.size} * 0.625)` : '50px')};
position: relative;
`;
const LoaderText = styled_components_1.default.span `
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  color: ${(props) => props.textColor || '#C8B6FF'};
  animation: ${loaderTextAnimation} 3.5s ease both infinite;
  font-size: 0.8rem;
  letter-spacing: 1px;
`;
const Load = styled_components_1.default.span `  
  background-color: ${(props) => props.backgroundColor || '#9A79FF'};  
  border-radius: 50px;
  display: block;
  height: 16px;
  width: 16px;
  bottom: 0;
  position: absolute;
  transform: translateX(64px);
  animation: ${loadingAnimation} 3.5s ease both infinite;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.backgroundColor || '#D1C2FF'}; // Update this line
    border-radius: inherit;
    animation: ${loading2Animation} 3.5s ease both infinite;
  }
`;
const CustomLoader = ({ text, textColor, size, className, }) => {
    return (react_1.default.createElement(LoaderContainer, { size: size, className: className },
        react_1.default.createElement(LoaderText, { textColor: textColor }, text || 'Loading'),
        react_1.default.createElement(Load, null)));
};
exports.default = CustomLoader;
