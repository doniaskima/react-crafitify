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
const spinnerAnimation = (0, styled_components_1.keyframes) `
  100% {
    transform: rotate(1turn);
  }
`;
const Spinner = styled_components_1.default.div `
  width: ${props => props.size || '56px'};
  height: ${props => props.size || '56px'};
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: ${props => props.color || '#004dff'};
  animation: ${spinnerAnimation} 1s infinite linear;
`;
const BeforeAfterSpinner = styled_components_1.default.div `
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: ${spinnerAnimation} 2s infinite;
`;
const AfterSpinner = (0, styled_components_1.default)(BeforeAfterSpinner) `
  margin: 8px;
  animation-duration: 3s;
`;
const BluLoader = ({ color, size }) => {
    return (react_1.default.createElement(Spinner, { className: "spinner", color: color, size: size },
        react_1.default.createElement(BeforeAfterSpinner, null),
        react_1.default.createElement(AfterSpinner, null)));
};
exports.default = BluLoader;
