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
const rotate = (0, styled_components_1.keyframes) `
  0%, 100% {
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 0.8);
  }
  50% {
    animation-timing-function: cubic-bezier(0.2, 0.2, 0.8, 1);
  }
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const scale = (0, styled_components_1.keyframes) `
  0%, 100% {
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 0.8);
  }
  50% {
    animation-timing-function: cubic-bezier(0.2, 0.2, 0.8, 1);
  }
  0% {
    transform: translate(-30px, -30px) scale(0);
  }
  50% {
    transform: translate(-30px, -30px) scale(1);
  }
  100% {
    transform: translate(-30px, -30px) scale(0);
  }
`;
const LoaderContainer = styled_components_1.default.div `
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
`;
const InterwindWrapper = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;
const InnerDiv = styled_components_1.default.div `
  transform: translate(0px, -15px);
`;
const Spinner = styled_components_1.default.div `
  animation: ${rotate} 1s linear infinite;
  transform-origin: 100px 100px;
`;
const Circle = styled_components_1.default.div `
  position: absolute;
  transform: translate(100px, 82px);
`;
const SmallCircle = styled_components_1.default.div `
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fe718d;
  animation: ${scale} 1s linear infinite;
`;
const InterwindLoader = ({ className }) => {
    return (react_1.default.createElement(LoaderContainer, { className: className },
        react_1.default.createElement(InterwindWrapper, null,
            react_1.default.createElement(InnerDiv, null,
                react_1.default.createElement(Spinner, null,
                    react_1.default.createElement(Circle, null,
                        react_1.default.createElement(SmallCircle, null)),
                    react_1.default.createElement(Circle, null,
                        react_1.default.createElement(SmallCircle, { style: { background: '#46dff0' } })))))));
};
exports.default = InterwindLoader;
