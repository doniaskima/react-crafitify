"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColors = exports.CustomSize = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const GradientSpinner2_1 = __importDefault(require("../GradientSpinner2"));
exports.default = {
    title: 'Spinners/GradientSpinner2',
    component: GradientSpinner2_1.default,
};
const Template = (args) => react_1.default.createElement(GradientSpinner2_1.default, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.CustomSize = Template.bind({});
exports.CustomSize.args = {
    size: '50px',
};
exports.CustomColors = Template.bind({});
exports.CustomColors.args = {
    startColor: '#FF5733',
    midColor: '#DAF7A6',
    endColor: '#C70039',
};
