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
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const loaderBarAnimation = (0, styled_components_1.keyframes) `
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const LoaderContainer = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LoaderText = styled_components_1.default.div `
  font-size: 24px;
  color: ${props => props.textColor || 'rgb(0, 0, 0)'};
  margin-bottom: 20px;
  align-self: center;
`;
const LoaderBar = styled_components_1.default.div `
  width: 30%;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.barColor || 'rgb(0, 0, 0)'};
  animation: ${loaderBarAnimation} 2s ease-in-out infinite;
`;
const LoadingBar = ({ text, textColor, barColor, className }) => {
    return (react_1.default.createElement(LoaderContainer, { className: `loader ${className || ''}` },
        react_1.default.createElement(LoaderText, { className: "loader-text", textColor: textColor }, text || 'Loading...'),
        react_1.default.createElement(LoaderBar, { className: "loader-bar", barColor: barColor })));
};
LoadingBar.propTypes = {
    text: prop_types_1.default.string,
    textColor: prop_types_1.default.string,
    barColor: prop_types_1.default.string,
    className: prop_types_1.default.string,
};
exports.default = LoadingBar;
