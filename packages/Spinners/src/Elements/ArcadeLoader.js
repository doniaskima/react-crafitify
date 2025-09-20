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
  0% {
    clip-path: polygon(50% 50%, 100% 0, 100% 0, 0 0, 0 100%, 100% 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 100% 65%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 35%);
  }
`;
const LoaderWrapper = styled_components_1.default.div `
  width: ${(props) => props.size || '50px'};
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, ${(props) => props.color || '#000'} 98%, #0000) 55% 20%/8px 8px no-repeat,
    #ffcc00;
  box-shadow: 2px -6px 12px 0px inset rgba(0, 0, 0, 0.7);
  animation: ${loaderAnimation} 0.5s infinite steps(5) alternate;
`;
const ArcadeLoader = ({ size, color }) => {
    return react_1.default.createElement(LoaderWrapper, { size: size, color: color });
};
exports.default = ArcadeLoader;
