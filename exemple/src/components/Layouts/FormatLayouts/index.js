"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_craftify_core_1 = require("react-craftify-core");
const FormatLayouts = (props) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: { position: "relative" } },
            react_1.default.createElement(react_craftify_core_1.Container, null,
                react_1.default.createElement(react_craftify_core_1.Row, null, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((col, i) => (react_1.default.createElement(react_craftify_core_1.Col, { key: i, grid: `${col}` },
                    react_1.default.createElement("div", { className: "displayBgCol" })))))),
            react_1.default.createElement("div", { className: "rowOverlay" },
                react_1.default.createElement(react_craftify_core_1.Container, null,
                    react_1.default.createElement(react_craftify_core_1.Row, null, props.gridArray.map((col, i) => (react_1.default.createElement(react_craftify_core_1.Col, { key: i, grid: `${col}` },
                        react_1.default.createElement("div", { className: "displayCol" },
                            "col-",
                            col))))))))));
};
exports.default = FormatLayouts;
