"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rounded = exports.Large = exports.Small = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const ShakeButton_1 = __importDefault(require("../ShakeButton"));
exports.default = {
    title: 'Buttons/ShakeButton',
    component: ShakeButton_1.default,
};
const CenteredTemplate = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(ShakeButton_1.default, Object.assign({}, args))));
exports.Default = CenteredTemplate.bind({});
exports.Default.args = {
    children: 'Shake',
};
exports.Small = CenteredTemplate.bind({});
exports.Small.args = {
    children: 'Small Shake',
    style: { height: '2.5em', width: '6em', fontSize: '14px' },
};
exports.Large = CenteredTemplate.bind({});
exports.Large.args = {
    children: 'Large Shake',
    style: { height: '3.5em', width: '10em', fontSize: '20px' },
};
exports.Rounded = CenteredTemplate.bind({});
exports.Rounded.args = {
    children: 'Rounded Shake',
    style: { borderRadius: '20em' },
};
