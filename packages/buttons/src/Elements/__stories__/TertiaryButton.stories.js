"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Large = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const TertiaryButton_1 = __importDefault(require("../TertiaryButton"));
exports.default = {
    title: 'Buttons/TertiaryButton',
    component: TertiaryButton_1.default,
};
const CenteredTemplate = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(TertiaryButton_1.default, Object.assign({}, args))));
exports.Default = CenteredTemplate.bind({});
exports.Default.args = {
    children: 'Button',
};
exports.Large = CenteredTemplate.bind({});
exports.Large.args = {
    children: 'Large Button',
    style: { fontSize: '20px', padding: '12px 24px' },
};
exports.CustomColor = CenteredTemplate.bind({});
exports.CustomColor.args = {
    children: 'Custom Color Button',
    bgColor: '#ff9900', // Change the background color on hover
    textColor: '#ffffff80', // Change the text color on default
    borderColor: '#ff9900', // Change the border color on default
    shadowColor: '#ff9900', // Change the shadow color on hover
};
