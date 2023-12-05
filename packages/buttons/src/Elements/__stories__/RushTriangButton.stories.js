"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomText = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const RushTriangButton_1 = __importDefault(require("../RushTriangButton"));
exports.default = {
    title: 'Buttons/RushTriangButton',
    component: RushTriangButton_1.default,
};
const Template = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(RushTriangButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Button',
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    children: 'Disabled Button',
    disabled: true,
};
exports.CustomText = Template.bind({});
exports.CustomText.args = {
    children: 'Custom Text',
};
