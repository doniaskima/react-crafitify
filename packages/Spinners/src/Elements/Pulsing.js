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
const pulsingAnimation = (0, styled_components_1.keyframes) `
  100% {
    box-shadow: 0 0 0 30px transparent;
  }
`;
const LoaderWrapper = styled_components_1.default.div `
  width: ${(props) => (props.size ? props.size : '20px')};
  height: ${(props) => (props.size ? props.size : '20px')};
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : '#000')};
  box-shadow: 0 0 0 0 ${(props) => (props.color ? props.color + '4' : '#0004')};
  animation: ${pulsingAnimation} 1s infinite;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;
const Pulsing = ({ color, size, }) => {
    return react_1.default.createElement(LoaderWrapper, { color: color, size: size });
};
exports.default = Pulsing;
