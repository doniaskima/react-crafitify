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
const settingLoaderAnimation = (0, styled_components_1.keyframes) `
  100% {
    transform: rotate(1turn);
  }
`;
const SettingLoaderContainer = styled_components_1.default.div `
  width: ${(props) => props.size || '50px'};
  aspect-ratio: 1;
  display: grid;
  color: ${(props) => props.color || '#854f1d'};
  background: radial-gradient(farthest-side, currentColor calc(100% - 6px), #0000 calc(100% - 5px) 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 13px), #000 calc(100% - 12px));
  border-radius: 50%;
  animation: ${settingLoaderAnimation} 2s infinite linear;
`;
const SettingLoaderBeforeAfter = styled_components_1.default.div `
  content: "";
  grid-area: 1/1;
  background:
    linear-gradient(currentColor 0 0) center,
    linear-gradient(currentColor 0 0) center;
  background-size: 100% 10px, 10px 100%;
  background-repeat: no-repeat;
`;
const SettingLoaderAfter = (0, styled_components_1.default)(SettingLoaderBeforeAfter) `
  transform: rotate(45deg);
`;
const SettingLoader = ({ size, color }) => {
    return (react_1.default.createElement(SettingLoaderContainer, { size: size, color: color },
        react_1.default.createElement(SettingLoaderBeforeAfter, null),
        react_1.default.createElement(SettingLoaderAfter, null)));
};
exports.default = SettingLoader;
