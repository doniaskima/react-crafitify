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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  border: none;
  width: ${(props) => props.width || '15em'};
  height: ${(props) => props.height || '5em'};
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: ${(props) => props.backgroundColor || '#1C1A1C'}; // Use background color prop
  cursor: pointer;
  transition: all 450ms ease-in-out;
  position: relative;

  &:hover {
    background: ${(props) => props.hoverGradient || 'linear-gradient(0deg, #A47CF3, #683FEA)'};
    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
      inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
      0px 0px 0px 4px rgba(255, 255, 255, 0.2),
      0px 0px 180px 0px #9917FF;
    transform: translateY(-2px);
  }

  ${(props) => props.disabled &&
    (0, styled_components_1.css) `
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
const SparkleIcon = styled_components_1.default.svg `
  fill: #aaaaaa;
  transition: all 800ms ease;
`;
const Text = styled_components_1.default.span `
  font-weight: 600;
  color: #aaaaaa;
  font-size: medium;
`;
const GenerateBtn = (_a) => {
    var { children, width, height, onClick, disabled, loading = false, backgroundColor, hoverGradient } = _a, rest = __rest(_a, ["children", "width", "height", "onClick", "disabled", "loading", "backgroundColor", "hoverGradient"]);
    const [isSparkling, setIsSparkling] = (0, react_1.useState)(false);
    const handleOnClick = () => {
        if (!disabled && !loading) {
            onClick && onClick();
            setIsSparkling(true);
            setTimeout(() => setIsSparkling(false), 800);
        }
    };
    return (react_1.default.createElement(StyledButton, Object.assign({ onClick: handleOnClick, disabled: disabled || loading, width: width, height: height, backgroundColor: backgroundColor, hoverGradient: hoverGradient }, rest),
        isSparkling && (react_1.default.createElement(SparkleIcon, { height: "24", width: "24", fill: "#FFFFFF", viewBox: "0 0 24 24", "data-testid": "sparkle-icon", className: isSparkling ? 'sparkle' : '' },
            react_1.default.createElement("path", { d: "M10,21.236,6.755,14.745,0.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333,3.333-1.167-2.333-1.167L20.5,0,19.333,2.333,17,3.5Z" }))),
        react_1.default.createElement(Text, null, loading ? 'Loading...' : children)));
};
exports.default = GenerateBtn;
