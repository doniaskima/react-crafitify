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
const ballMoveAnimation = (0, styled_components_1.keyframes) `
  from {
    left: calc(100% - 40px);
    transform: rotate(360deg);
  }

  to {
    left: calc(0% - 20px);
    transform: rotate(0deg);
  }
`;
const upDownAnimation = (0, styled_components_1.keyframes) `
  from {
    transform: rotate(-15deg);
  }

  to {
    transform: rotate(15deg);
  }
`;
const BallContainer = styled_components_1.default.div `
  width: 200px;
  height: 12.5px;
  background: #FFDAAF;
  border-radius: 30px;
  transform: rotate(-15deg);
  animation: ${upDownAnimation} 3s ease-in-out 1s infinite alternate;
`;
const Ball = styled_components_1.default.div `
  position: relative;
  bottom: 50px;
  left: calc(100% - 20px);
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  animation: ${ballMoveAnimation} 3s ease-in-out 1s infinite alternate;

  &::after {
    position: absolute;
    content: '';
    top: 25px;
    right: 5px;
    width: 5px;
    height: 5px;
    background: #000;
    border-radius: 50%;
  }
`;
const BallComponent = () => {
    return (react_1.default.createElement(BallContainer, null,
        react_1.default.createElement(Ball, null)));
};
exports.default = BallComponent;
