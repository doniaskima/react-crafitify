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
const rotateAnimation = (0, styled_components_1.keyframes) `
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
const Container = styled_components_1.default.div `
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: ${(props) => props.size || '96px'};
  width: ${(props) => props.size || '96px'};
  animation: ${rotateAnimation} 1.2s linear infinite;
  background-color: ${(props) => props.startColor || '#9b59b6'};
  background-image: linear-gradient(
    ${(props) => props.startColor || '#9b59b6'},
    ${(props) => props.midColor || '#84cdfa'},
    ${(props) => props.endColor || '#5ad1cd'}
  );
`;
const Span = styled_components_1.default.span `
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.startColor || '#9b59b6'};
  background-image: linear-gradient(
    ${(props) => props.startColor || '#9b59b6'},
    ${(props) => props.midColor || '#84cdfa'},
    ${(props) => props.endColor || '#5ad1cd'}
  );

  &:nth-of-type(1) {
    filter: blur(5px);
  }

  &:nth-of-type(2) {
    filter: blur(10px);
  }

  &:nth-of-type(3) {
    filter: blur(25px);
  }

  &:nth-of-type(4) {
    filter: blur(50px);
  }
`;
const GradientSpinner2 = ({ size, startColor, midColor, endColor }) => {
    return (react_1.default.createElement(Container, { size: size, startColor: startColor, midColor: midColor, endColor: endColor },
        react_1.default.createElement(Span, { startColor: startColor, midColor: midColor, endColor: endColor }),
        react_1.default.createElement(Span, { startColor: startColor, midColor: midColor, endColor: endColor }),
        react_1.default.createElement(Span, { startColor: startColor, midColor: midColor, endColor: endColor }),
        react_1.default.createElement(Span, { startColor: startColor, midColor: midColor, endColor: endColor })));
};
exports.default = GradientSpinner2;
