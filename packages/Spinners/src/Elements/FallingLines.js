"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const type_1 = require("./type");
const FallingLines = ({ color = type_1.DEFAULT_COLOR, width = '100', visible = true, }) => {
    return visible ? (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: width, height: width, viewBox: "0 0 100 100", "data-testid": "falling-lines" }, type_1.DEFAULT_WAI_ARIA_ATTRIBUTE),
        react_1.default.createElement("rect", { y: "25", width: "10", height: "50", rx: "4", ry: "4", fill: color, "data-testid": "falling-lines-rect-1" },
            react_1.default.createElement("animate", { attributeName: "x", values: "10;100", dur: "1.2s", repeatCount: "indefinite" }),
            react_1.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 10 70", to: "-60 100 70", dur: "1.2s", repeatCount: "indefinite" }),
            react_1.default.createElement("animate", { attributeName: "opacity", values: "0;1;0", dur: "1.2s", repeatCount: "indefinite" })),
        react_1.default.createElement("rect", { y: "25", width: "10", height: "50", rx: "4", ry: "4", fill: color },
            react_1.default.createElement("animate", { attributeName: "x", values: "10;100", dur: "1.2s", begin: "0.4s", repeatCount: "indefinite" }),
            react_1.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 10 70", to: "-60 100 70", dur: "1.2s", begin: "0.4s", repeatCount: "indefinite" }),
            react_1.default.createElement("animate", { attributeName: "opacity", values: "0;1;0", dur: "1.2s", begin: "0.4s", repeatCount: "indefinite" })),
        react_1.default.createElement("rect", { y: "25", width: "10", height: "50", rx: "4", ry: "4", fill: color, "data-testid": "falling-lines-rect-2" },
            react_1.default.createElement("animate", { attributeName: "x", values: "10;100", dur: "1.2s", begin: "0.8s", repeatCount: "indefinite" }),
            react_1.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 10 70", to: "-60 100 70", dur: "1.2s", begin: "0.8s", repeatCount: "indefinite" }),
            react_1.default.createElement("animate", { attributeName: "opacity", values: "0;1;0", dur: "1.2s", begin: "0.8s", repeatCount: "indefinite" })))) : null;
};
exports.default = FallingLines;
