"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomClass = exports.Centered = exports.Colored = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const CustomSpinner_1 = __importDefault(require("../CustomSpinner"));
exports.default = {
    title: 'Spinners/CustomSpinner',
    component: CustomSpinner_1.default,
    argTypes: {
        color: { control: 'color' },
        center: { control: 'boolean' },
        className: { control: 'text' },
    },
    parameters: {
        layout: 'centered',
    },
};
const Template = (args) => react_1.default.createElement(CustomSpinner_1.default, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.Colored = Template.bind({});
exports.Colored.args = {
    color: '#ff0000',
};
exports.Centered = Template.bind({});
exports.Centered.args = {
    center: true,
};
exports.CustomClass = Template.bind({});
exports.CustomClass.args = {
    className: 'custom-spinner',
};
