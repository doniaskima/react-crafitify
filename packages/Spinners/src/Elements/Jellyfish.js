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
const whirlpool = (0, styled_components_1.keyframes) `
  0% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }
  50% {
    transform: translateY(60px);
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }
  100% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }
`;
const WhirlpoolContainer = styled_components_1.default.div `
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  margin: 100px auto;
  position: relative;
`;
const Ring = styled_components_1.default.div `
  &:before {
    content: '';
    border-radius: 50%;
    border: 1px solid #555;
    height: 30px;
    width: 100px;
    position: absolute;
  }
`;
const Ring1 = (0, styled_components_1.default)(Ring) `
  &:before {
    left: 40px;
    width: 20px;
    top: 12px;
    height: 6px;
    animation: 2.5s ease 0s infinite ${whirlpool};
  }
`;
const Ring2 = (0, styled_components_1.default)(Ring) `
  &:before {
    left: 35px;
    width: 30px;
    top: 10.5px;
    height: 9px;
    animation: 2.5s ease 0.1s infinite ${whirlpool};
  }
`;
const Ring3 = (0, styled_components_1.default)(Ring) `
  &:before {
    left: 30px;
    width: 40px;
    top: 9px;
    height: 12px;
    animation: 2.5s ease 0.2s infinite ${whirlpool};
  }
`;
const Ring4 = (0, styled_components_1.default)(Ring) `
  &:before {
    left: 25px;
    width: 50px;
    top: 7.5px;
    height: 15px;
    animation: 2.5s ease 0.3s infinite ${whirlpool};
  }
`;
const Ring5 = (0, styled_components_1.default)(Ring) `
  &:before {
    left: 20px;
    width: 60px;
    top: 6px;
    height: 18px;
    animation: 2.5s ease 0.4s infinite ${whirlpool};
  }
`;
const Ring6 = (0, styled_components_1.default)(Ring) `
  &:before {
    left: 15px;
    width: 70px;
    top: 4.5px;
    height: 21px;
    animation: 2.5s ease 0.5s infinite ${whirlpool};
  }
`;
const Ring7 = (0, styled_components_1.default)(Ring) `
  &:before {
    left: 10px;
    width: 80px;
    top: 3px;
    height: 24px;
    animation: 2.5s ease 0.6s infinite ${whirlpool};
  }
`;
const Ring8 = (0, styled_components_1.default)(Ring) `
  &:before {
    left: 5px;
    width: 90px;
    top: 1.5px;
    height: 27px;
    animation: 2.5s ease 0.7s infinite ${whirlpool};
  }
`;
const Ring9 = (0, styled_components_1.default)(Ring) `
  &:before {
    width: 100px;
    height: 30px;
    animation: 2.5s ease 0.8s infinite ${whirlpool};
  }
`;
const Jellyfish = ({ size }) => {
    return (react_1.default.createElement(WhirlpoolContainer, { size: size },
        react_1.default.createElement(Ring1, null),
        react_1.default.createElement(Ring2, null),
        react_1.default.createElement(Ring3, null),
        react_1.default.createElement(Ring4, null),
        react_1.default.createElement(Ring5, null),
        react_1.default.createElement(Ring6, null),
        react_1.default.createElement(Ring7, null),
        react_1.default.createElement(Ring8, null),
        react_1.default.createElement(Ring9, null)));
};
exports.default = Jellyfish;
