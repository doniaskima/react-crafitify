"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const DotSpinner_1 = __importDefault(require("../DotSpinner"));
exports.default = {
    title: 'Spinners/DotSpinner',
    component: DotSpinner_1.default,
    parameters: {
        layout: 'centered',
    },
};
const Template = (args) => react_1.default.createElement(DotSpinner_1.default, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {};
