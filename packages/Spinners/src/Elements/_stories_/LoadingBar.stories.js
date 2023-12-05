"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithClassName = exports.CustomColors = exports.CustomText = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const LoadingBar_1 = __importDefault(require("../LoadingBar"));
exports.default = {
    title: 'Spinners/LoadingBar',
    component: LoadingBar_1.default,
    argTypes: {
        text: { control: 'text' },
        textColor: { control: 'color' },
        barColor: { control: 'color' },
        className: { control: 'text' },
    },
    parameters: {
        layout: 'centered',
    },
};
const Template = (args) => react_1.default.createElement(LoadingBar_1.default, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.CustomText = Template.bind({});
exports.CustomText.args = {
    text: 'Please wait...',
};
exports.CustomColors = Template.bind({});
exports.CustomColors.args = {
    textColor: '#ff0000',
    barColor: '#00ff00',
};
exports.WithClassName = Template.bind({});
exports.WithClassName.args = {
    className: 'custom-style',
};
