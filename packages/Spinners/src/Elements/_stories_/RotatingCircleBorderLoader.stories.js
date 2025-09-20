"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomClassName = exports.CustomColor = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const RotatingCircleBorderLoader_1 = __importDefault(require("../RotatingCircleBorderLoader"));
exports.default = {
    title: 'Spinners/RotatingCircleBorderLoader',
    component: RotatingCircleBorderLoader_1.default,
    argTypes: {
        color: { control: 'color' },
        className: { control: 'text' },
    },
    parameters: {
        layout: 'centered',
    },
};
const Template = (args) => react_1.default.createElement(RotatingCircleBorderLoader_1.default, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    color: '#00ff00',
};
exports.CustomClassName = Template.bind({});
exports.CustomClassName.args = {
    className: 'custom-style',
};
