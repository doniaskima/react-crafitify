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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerCircular = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const helpers_1 = require("../helpers");
const withSharedProps_1 = require("../withSharedProps");
const spinAnimation = (0, styled_components_1.keyframes) `
  0% {
    stroke-dashoffset: 306;
  }
  50% {
    stroke-dasharray: 40, 134;
  }
  100% {
    stroke-dasharray: 1, 174;
    stroke-dashoffset: 132;
  }
`;
const StyledSvg = styled_components_1.default.svg `
  display: block;
`;
const StyledCircle = styled_components_1.default.circle `
  fill: none;
  stroke: ${props => props.secondaryColor};
  stroke-width: ${props => 4 * (props.thickness / 100)};
`;
const StyledAnimatedCircle = (0, styled_components_1.default)(StyledCircle) `
  stroke: currentColor;
  stroke-dasharray: 1, 174;
  stroke-dashoffset: 306;
  stroke-linecap: round;
  animation: ${props => !props.still
    ? (0, styled_components_1.css) `
          ${spinAnimation} ${140 / props.speed}s linear infinite
        `
    : 'none'};
`;
const Component = (_a) => {
    var { secondaryColor, speed, still, thickness } = _a, svgProps = __rest(_a, ["secondaryColor", "speed", "still", "thickness"]);
    return (react_1.default.createElement(StyledSvg, Object.assign({ fill: "none" }, svgProps, { viewBox: "0 0 66 66" }),
        react_1.default.createElement(StyledCircle, { cx: "33", cy: "33", r: "28", secondaryColor: secondaryColor, thickness: thickness }),
        react_1.default.createElement(StyledAnimatedCircle, { cx: "33", cy: "33", r: "28", thickness: thickness, speed: speed, still: still })));
};
Component.defaultProps = helpers_1.secondaryColorDefaultProps;
exports.SpinnerCircular = (0, withSharedProps_1.withSharedProps)(Component);
