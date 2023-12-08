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
const spinningAnimation = (0, styled_components_1.keyframes) `
  to {
    transform: rotate(360deg);
  }
`;
const SpinnerContainer = styled_components_1.default.div `
  background-image: ${(props) => `linear-gradient(${props.startColor} 35%, ${props.endColor})`};
  width: ${(props) => props.size || '100px'};
  height: ${(props) => props.size || '100px'};
  animation: ${spinningAnimation} 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px ${(props) => props.startColor}, 0px 5px 20px 0px ${(props) => props.endColor};
`;
const InnerSpinner = styled_components_1.default.div `
  background-color: ${(props) => props.innerColor || 'rgb(36, 36, 36)'};
  width: 100%;
  height: 100%;
  border-radius: 50px;
  filter: blur(10px);
`;
const GradientSpinner = ({ startColor, endColor, innerColor, size }) => {
    return (react_1.default.createElement(SpinnerContainer, { startColor: startColor, endColor: endColor, size: size },
        react_1.default.createElement(InnerSpinner, { innerColor: innerColor })));
};
exports.default = GradientSpinner;
