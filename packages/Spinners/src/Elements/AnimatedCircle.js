"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledSVG = styled_components_1.default.svg `
  width: ${(props) => props.size || '3.25em'};
  transform-origin: center;
  animation: rotateAnimation 2s linear infinite;

  @keyframes rotateAnimation {
    100% {
      transform: rotate(360deg);
    }
  }
`;
const StyledCircle = styled_components_1.default.circle `
  fill: none;
  stroke: ${(props) => props.color || 'hsl(214, 97%, 59%)'};
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dashAnimation 1.5s ease-in-out infinite;

  @keyframes dashAnimation {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`;
const AnimatedCircle = ({ color, size, className }) => {
    return (react_1.default.createElement(StyledSVG, { viewBox: "25 25 50 50", size: size, className: className },
        react_1.default.createElement(StyledCircle, { r: "20", cy: "50", cx: "50", color: color })));
};
exports.default = AnimatedCircle;
