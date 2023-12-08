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
const batteryLoaderAnimation = (0, styled_components_1.keyframes) `
  100% {
    background-size: 120%;
  }
`;
const BatteryLoaderContainer = styled_components_1.default.div `
  width: ${(props) => props.size || '80px'};
  height: ${(props) => props.size ? parseInt(props.size) / 2 + 'px' : '40px'};
  color: ${(props) => props.color || '#000'};
  border: 2px solid currentColor;
  border-right-color: transparent;
  padding: 3px;
  background: repeating-linear-gradient(
    90deg,
    currentColor 0 10px,
    #0000 0 15px
  ) 0/0% no-repeat content-box content-box;
  position: relative;
  animation: ${batteryLoaderAnimation} 2s infinite steps(6);
`;
const BatteryLoaderBefore = styled_components_1.default.div `
  content: "";
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: 100%;
  width: 10px;
  background: linear-gradient(
      #0000 calc(50% - 7px),
      currentColor 0 calc(50% - 5px),
      #0000 0 calc(50% + 5px),
      currentColor 0 calc(50% + 7px),
      #0000 0
    )
    left / 100% 100%,
    linear-gradient(
      currentColor calc(50% - 5px),
      #0000 0 calc(50% + 5px),
      currentColor 0
    )
    left / 2px 100%,
    linear-gradient(
      #0000 calc(50% - 5px),
      currentColor 0 calc(50% + 5px),
      #0000 0
    )
    right / 2px 100%;
  background-repeat: no-repeat;
`;
const BatteryLoader = ({ size, color }) => {
    return (react_1.default.createElement(BatteryLoaderContainer, { size: size, color: color },
        react_1.default.createElement(BatteryLoaderBefore, null)));
};
exports.default = BatteryLoader;
