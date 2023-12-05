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
const moveBarAnimation = (0, styled_components_1.keyframes) `
  0% {
    width: 0;
  }

  1% {
    border: 1px solid #00b4d8;
  }

  40% {
    width: 2rem;
  }

  99% {
    border: 1px solid #00b4d8;
    left: 99%;
  }

  100% {
    border: none;
    left: 100%;
    width: 0;
  }
`;
const StyledButton = styled_components_1.default.button `
  background-color: transparent;
  border: 1px solid ${(props) => props.borderColor || '#00b4d8'};
  border-radius: 0.2rem;
  color: ${(props) => props.color || '#00b4d8'};
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  position: relative;
  text-transform: uppercase;
  transition: ease-in 0.3s;

  &:hover, &:active, &:focus {
    background: ${(props) => props.hoverBackgroundColor || 'radial-gradient(#00b4d8, #4cc9f0)'};
    box-shadow: ${(props) => props.hoverBoxShadow || '0px 0px 0.3rem #00b4d8'};
    color: #001219;
  }

  &::before {
    bottom: -0.5rem;
    content: '';
    left: 0;
    position: absolute;
  }

  &::after {
    top: -0.5rem;
    content: '';
    left: 0;
    position: absolute;
  }

  &:hover::before {
    animation: ${moveBarAnimation} ease-in 0.6s forwards reverse;
  }

  &:hover::after {
    animation: ${moveBarAnimation} ease-in 0.6s forwards;
  }
`;
const GradientBorderButton = ({ children, borderColor, color, hoverBackgroundColor, hoverBoxShadow, className, }) => {
    return (react_1.default.createElement(StyledButton, { borderColor: borderColor, color: color, hoverBackgroundColor: hoverBackgroundColor, hoverBoxShadow: hoverBoxShadow, className: className }, children));
};
exports.default = GradientBorderButton;
