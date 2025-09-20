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
const spinnerFadeAnimation = (0, styled_components_1.keyframes) `
  0% {
    background-color: #69717d;
  }

  100% {
    background-color: transparent;
  }
`;
const SpinnerContainer = styled_components_1.default.div `
  font-size: 28px;
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;

  &.center {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;
const SpinnerBlade = styled_components_1.default.div `
  position: absolute;
  left: 0.4629em;
  bottom: 0;
  width: 0.074em;
  height: 0.2777em;
  border-radius: 0.0555em;
  background-color: transparent;
  transform-origin: center -0.2222em;
  animation: ${spinnerFadeAnimation} 1s infinite linear;

  ${props => props.index &&
    `
    animation-delay: ${props.index * 0.083}s;
    transform: rotate(${props.index * 30}deg);
  `}

  ${props => props.color &&
    `
    background-color: ${props.color};
  `}
`;
const CustomSpinner = ({ color, center }) => {
    return (react_1.default.createElement(SpinnerContainer, { className: `spinner ${center ? 'center' : ''}` }, [...Array(12)].map((_, index) => (react_1.default.createElement(SpinnerBlade, { key: index, index: index + 1, style: { backgroundColor: color } })))));
};
exports.default = CustomSpinner;
