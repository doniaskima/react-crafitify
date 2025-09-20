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
const eyesAnimation = (0, styled_components_1.keyframes) `
  0%, 70% {
    background-size: 100% 40%, 8px 8px;
  }
  85% {
    background-size: 100% 120%, 8px 8px;
  }
  100% {
    background-size: 100% 40%, 8px 8px;
  }
`;
const EyesLoaderContainer = styled_components_1.default.div `
  display: inline-flex;
  gap: 10px;
`;
const Eye = styled_components_1.default.div `
  content: "";
  height: ${(props) => props.size || '20px'};
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    linear-gradient(#222 0 0) top/100% 40% no-repeat,
    radial-gradient(farthest-side, #000 95%, #0000) 50%/8px 8px no-repeat #fff;
  animation: ${eyesAnimation} 1.5s infinite alternate ease-in;
`;
const EyesLoader = ({ size }) => {
    return (react_1.default.createElement(EyesLoaderContainer, null,
        react_1.default.createElement(Eye, { size: size }),
        react_1.default.createElement(Eye, { size: size })));
};
exports.default = EyesLoader;
