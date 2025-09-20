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
const spinAnimation = (0, styled_components_1.keyframes) `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const SpinnerContainer = styled_components_1.default.div `
  width: ${({ size }) => size || '150px'};
  height: ${({ size }) => size || '150px'};
  position: relative;
  margin: 30px auto;
  overflow: hidden;
`;
const Spinner = styled_components_1.default.div `
  position: absolute;
  width: calc(100% - 9.9px);
  height: calc(100% - 9.9px);
  border: 5px solid transparent;
  border-radius: 50%;
  border-top-color: ${({ color }) => color || '#e15b64'};
  animation: ${spinAnimation} 5s cubic-bezier(0.17, 0.49, 0.96, 0.79) infinite;
`;
const NestedSpinner = (0, styled_components_1.default)(Spinner) `
  margin: 8px;
`;
const Codecite = ({ colors, size }) => {
    return (react_1.default.createElement(SpinnerContainer, { size: size },
        react_1.default.createElement(Spinner, { color: colors[0] },
            react_1.default.createElement(NestedSpinner, { color: colors[1] },
                react_1.default.createElement(NestedSpinner, { color: colors[2] },
                    react_1.default.createElement(NestedSpinner, { color: colors[3] },
                        react_1.default.createElement(NestedSpinner, { color: colors[4] },
                            react_1.default.createElement(NestedSpinner, { color: colors[5] },
                                react_1.default.createElement(Spinner, { color: colors[6] })))))))));
};
exports.default = Codecite;
