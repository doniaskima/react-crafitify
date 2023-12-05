"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomOnClick = exports.CustomStyle = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const PrimaryButton_1 = require("../PrimaryButton");
exports.default = {
    title: 'Buttons/PrimaryButton',
    component: PrimaryButton_1.PrimaryButton,
};
const CenteredTemplate = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(PrimaryButton_1.PrimaryButton, Object.assign({}, args))));
exports.Default = CenteredTemplate.bind({});
exports.Default.args = {
    children: 'Click Me',
};
exports.Disabled = CenteredTemplate.bind({});
exports.Disabled.args = {
    children: 'Disabled Button',
    disabled: true,
};
exports.CustomStyle = CenteredTemplate.bind({});
exports.CustomStyle.args = {
    children: 'Custom Style',
    className: 'custom-button',
};
exports.CustomOnClick = CenteredTemplate.bind({});
exports.CustomOnClick.args = {
    children: 'Custom OnClick',
    onClick: () => alert('Button Clicked!'),
};
