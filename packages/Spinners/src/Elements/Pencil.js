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
// Define the keyframes for the animations
const pencilBody1Animation = (0, styled_components_1.keyframes) `
  from, to {
    stroke-dashoffset: 351.86;
    transform: rotate(-90deg);
  }
  50% {
    stroke-dashoffset: 150.8;
    transform: rotate(-225deg);
  }
`;
const pencilBody2Animation = (0, styled_components_1.keyframes) `
  from, to {
    stroke-dashoffset: 406.84;
    transform: rotate(-90deg);
  }
  50% {
    stroke-dashoffset: 174.36;
    transform: rotate(-225deg);
  }
`;
const pencilBody3Animation = (0, styled_components_1.keyframes) `
  from, to {
    stroke-dashoffset: 296.88;
    transform: rotate(-90deg);
  }
  50% {
    stroke-dashoffset: 127.23;
    transform: rotate(-225deg);
  }
`;
const pencilEraserAnimation = (0, styled_components_1.keyframes) `
  from, to {
    transform: rotate(-45deg) translate(49px,0);
  }
  50% {
    transform: rotate(0deg) translate(49px,0);
  }
`;
const pencilEraserSkewAnimation = (0, styled_components_1.keyframes) `
  from, 32.5%, 67.5%, to {
    transform: skewX(0);
  }
  35%, 65% {
    transform: skewX(-4deg);
  }
  37.5%, 62.5% {
    transform: skewX(8deg);
  }
  40%, 45%, 50%, 55%, 60% {
    transform: skewX(-15deg);
  }
  42.5%, 47.5%, 52.5%, 57.5% {
    transform: skewX(15deg);
  }
`;
const pencilPointAnimation = (0, styled_components_1.keyframes) `
  from, to {
    transform: rotate(-90deg) translate(49px,-30px);
  }
  50% {
    transform: rotate(-225deg) translate(49px,-30px);
  }
`;
const pencilRotateAnimation = (0, styled_components_1.keyframes) `
  from {
    transform: translate(100px,100px) rotate(0);
  }
  to {
    transform: translate(100px,100px) rotate(720deg);
  }
`;
const PencilWrapper = styled_components_1.default.svg `
  display: block;
  width: 10em;
  height: 10em;
`;
const PencilStroke = styled_components_1.default.circle `
  animation: ${pencilRotateAnimation} 3s linear infinite;
  transform: translate(100px, 100px) rotate(-113deg);
  stroke-linecap: round;
  stroke-dashoffset: 439.82;
  stroke-dasharray: 439.82 439.82;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
`;
const PencilRotate = styled_components_1.default.g `
  animation: ${pencilRotateAnimation};
`;
const PencilBody1 = styled_components_1.default.circle `
  animation: ${pencilBody1Animation};
`;
const PencilBody2 = styled_components_1.default.circle `
  animation: ${pencilBody2Animation};
`;
const PencilBody3 = styled_components_1.default.circle `
  animation: ${pencilBody3Animation};
`;
const PencilEraser = styled_components_1.default.g `
  animation: ${pencilEraserAnimation};
  transform: rotate(-90deg) translate(49px, 0);
`;
const PencilEraserSkew = styled_components_1.default.g `
  animation: ${pencilEraserSkewAnimation};
  animation-timing-function: ease-in-out;
`;
const PencilPoint = styled_components_1.default.g `
  animation: ${pencilPointAnimation};
  transform: rotate(-90deg) translate(49px, -30px);
`;
const Pencil = () => {
    return (react_1.default.createElement(PencilWrapper, { xmlns: "http://www.w3.org/2000/svg", height: "200px", width: "200px", viewBox: "0 0 200 200", className: "pencil" },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: "pencil-eraser" },
                react_1.default.createElement("rect", { height: "30", width: "30", ry: "5", rx: "5" }))),
        react_1.default.createElement(PencilStroke, { r: "70", className: "pencil__stroke" }),
        react_1.default.createElement(PencilRotate, { className: "pencil__rotate" },
            react_1.default.createElement("g", { fill: "none" },
                react_1.default.createElement(PencilBody1, { transform: "rotate(-90)", r: "64", className: "pencil__body1" }),
                react_1.default.createElement(PencilBody2, { transform: "rotate(-90)", r: "74", className: "pencil__body2" }),
                react_1.default.createElement(PencilBody3, { transform: "rotate(-90)", r: "54", className: "pencil__body3" })),
            react_1.default.createElement(PencilEraser, { transform: "rotate(-90) translate(49,0)", className: "pencil__eraser" },
                react_1.default.createElement(PencilEraserSkew, { className: "pencil__eraser-skew" },
                    react_1.default.createElement("rect", { height: "30", width: "30", ry: "5", rx: "5", fill: "hsl(223,90%,70%)" }),
                    react_1.default.createElement("rect", { clipPath: "url(#pencil-eraser)", height: "30", width: "5", fill: "hsl(223,90%,60%)" }),
                    react_1.default.createElement("rect", { height: "20", width: "30", fill: "hsl(223,10%,90%)" }),
                    react_1.default.createElement("rect", { height: "20", width: "15", fill: "hsl(223,10%,70%)" }),
                    react_1.default.createElement("rect", { height: "20", width: "5", fill: "hsl(223,10%,80%)" }),
                    react_1.default.createElement("rect", { height: "2", width: "30", y: "6", fill: "hsla(223,10%,10%,0.2)" }),
                    react_1.default.createElement("rect", { height: "2", width: "30", y: "13", fill: "hsla(223,10%,10%,0.2)" }))),
            react_1.default.createElement(PencilPoint, { transform: "rotate(-90) translate(49,-30)", className: "pencil__point" },
                react_1.default.createElement("polygon", { points: "15 0,30 30,0 30", fill: "hsl(33,90%,70%)" }),
                react_1.default.createElement("polygon", { points: "15 0,6 30,0 30", fill: "hsl(33,90%,50%)" }),
                react_1.default.createElement("polygon", { points: "15 0,20 10,10 10", fill: "hsl(223,10%,10%)" })))));
};
exports.default = Pencil;
