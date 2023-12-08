"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const SecondaryButton_1 = __importDefault(require("../SecondaryButton")); // Use the default import
exports.default = {
    title: 'Buttons/SecondaryButton',
    component: SecondaryButton_1.default,
};
const CenteredTemplate = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(SecondaryButton_1.default, Object.assign({}, args))));
exports.Default = CenteredTemplate.bind({});
exports.Default.args = {
    onClick: () => console.log('Button clicked'),
    disabled: false,
    children: 'Secondary Button',
};
exports.Disabled = CenteredTemplate.bind({});
exports.Disabled.args = {
    onClick: () => console.log('Button clicked'),
    disabled: true,
    children: 'Disabled Secondary Button',
};
