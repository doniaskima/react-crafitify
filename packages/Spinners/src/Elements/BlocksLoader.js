"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const type_1 = require("./type");
function BlocksLoader({ visible = true, width = '80', height = '80', className = '', wrapperStyle = {}, ariaLabel = 'blocks-loading', }) {
    return !visible ? null : (react_1.default.createElement("svg", Object.assign({ width: width, height: height, className: className, style: wrapperStyle, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", "aria-label": ariaLabel, "data-testid": "blocks-svg" }, type_1.DEFAULT_WAI_ARIA_ATTRIBUTE),
        react_1.default.createElement("rect", { x: "17", y: "17", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "40", y: "17", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.125s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "63", y: "17", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.25s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "17", y: "40", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.875s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "63", y: "40", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.375s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "17", y: "63", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.75s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "40", y: "63", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.625s", calcMode: "discrete" })),
        react_1.default.createElement("rect", { x: "63", y: "63", width: "20", height: "20", fill: "#577c9b" },
            react_1.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.5s", calcMode: "discrete" }))));
}
exports.default = BlocksLoader;
