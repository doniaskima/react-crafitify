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
const loaderAnimation1 = (0, styled_components_1.keyframes) `
  3%, 97% {
    width: 160px;
    height: 100px;
    margin-top: -50px;
    margin-left: -80px;
  }

  30%, 36% {
    width: 80px;
    height: 120px;
    margin-top: -60px;
    margin-left: -40px;
  }

  63%, 69% {
    width: 40px;
    height: 80px;
    margin-top: -40px;
    margin-left: -20px;
  }
`;
const loaderAnimation2 = (0, styled_components_1.keyframes) `
  3%, 97% {
    height: 90px;
    width: 150px;
    margin-left: -75px;
    margin-top: -45px;
  }

  30%, 36% {
    width: 70px;
    height: 96px;
    margin-left: -35px;
    margin-top: -48px;
  }

  63%, 69% {
    width: 32px;
    height: 60px;
    margin-left: -16px;
    margin-top: -30px;
  }
`;
const loaderAnimation3 = (0, styled_components_1.keyframes) `
  3%, 97% {
    height: 20px;
    width: 40px;
    margin-left: -20px;
    margin-top: 50px;
  }

  30%, 36% {
    width: 8px;
    height: 8px;
    margin-left: -5px;
    margin-top: 49px;
    border-radius: 8px;
  }

  63%, 69% {
    width: 16px;
    height: 4px;
    margin-left: -8px;
    margin-top: -37px;
    border-radius: 10px;
  }
`;
const LoaderContainer = styled_components_1.default.div `
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  ${(props) => (0, styled_components_1.css) `
    width: ${props.width || '160px'};
    height: ${props.height || '100px'};
    margin-left: -${parseInt(props.width || '160px') / 2}px;
    margin-top: -${parseInt(props.height || '100px') / 2}px;
  `}
  border-radius: 5px;
  background: #1e3f57;
  animation: ${loaderAnimation1} 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;

  &:nth-child(2) {
    ${(props) => (0, styled_components_1.css) `
      width: ${props.width || '150px'};
      height: ${props.height || '90px'};
      margin-top: -${parseInt(props.height || '90px') / 2}px;
      margin-left: -${parseInt(props.width || '150px') / 2}px;
    `}
    border-radius: 3px;
    background: #3c517d;
    animation: ${loaderAnimation2} 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  }

  &:nth-child(3) {
    ${(props) => (0, styled_components_1.css) `
      width: ${props.width || '40px'};
      height: ${props.height || '20px'};
      margin-top: -${parseInt(props.height || '20px') / 2}px;
      margin-left: -${parseInt(props.width || '40px') / 2}px;
    `}
    border-radius: 0 0 5px 5px;
    background: #6bb2cd;
    animation: ${loaderAnimation3} 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  }
`;
const Devices = ({ width, height }) => {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement(LoaderContainer, { width: width, height: height }),
        react_1.default.createElement(LoaderContainer, { width: width, height: height }),
        react_1.default.createElement(LoaderContainer, { width: width, height: height })));
};
exports.default = Devices;
