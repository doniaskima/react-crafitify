"use strict";
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
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  position: relative;
  padding-top: ${(props) => (props.size === 'large' ? '1rem' : props.size === 'small' ? '0.5rem' : '0.75rem')};
  padding-right: 1.5rem;
  padding-bottom: ${(props) => (props.size === 'large' ? '1rem' : props.size === 'small' ? '0.5rem' : '0.75rem')};
  padding-left: 1.5rem;
  transition: all 0.3s;
  border-radius: 0.5rem;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  background-color: ${(props) => props.bgColor || 'transparent'}; // Use the bgColor prop here

  &:hover {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #000000;
    background-color: ${(props) => props.hoverColor || props.color || props.bgColor || 'transparent'};
  }

  svg {
    pointer-events: none;
    opacity: 1;
    border-radius: 0.5rem;
    mix-blend-mode: soft-light;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}`;
const FancyShadowButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(StyledButton, Object.assign({}, props),
        react_1.default.createElement("svg", null,
            react_1.default.createElement("filter", { id: "pedroduarteisalegend" },
                react_1.default.createElement("feTurbulence", { stitchTiles: "stitch", numOctaves: "4", baseFrequency: "0.5", type: "fractalNoise" })),
            react_1.default.createElement("rect", { filter: "url(#pedroduarteisalegend)", height: "100%", width: "100%" })),
        children));
};
exports.default = FancyShadowButton;
