"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallSize = exports.LargeSize = exports.CustomColorsAndHover = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const GradientBorderButton_1 = __importDefault(require("../GradientBorderButton"));
exports.default = {
    title: 'Buttons/GradientBorderButton',
    component: GradientBorderButton_1.default,
};
const CenteredStory = ({ children }) => {
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        } }, children));
};
const Template = (args) => (react_1.default.createElement(CenteredStory, null,
    react_1.default.createElement(GradientBorderButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Click Me',
};
exports.CustomColorsAndHover = Template.bind({});
exports.CustomColorsAndHover.args = {
    children: 'Custom Colors & Hover',
    borderColor: '#e63946',
    color: '#e63946',
    hoverBackgroundColor: 'radial-gradient(#e63946, #f38181)',
    hoverBoxShadow: '0px 0px 0.3rem #e63946',
};
exports.LargeSize = Template.bind({});
exports.LargeSize.args = {
    children: 'Large Button',
    size: 'large',
};
exports.SmallSize = Template.bind({});
exports.SmallSize.args = {
    children: 'Small Button',
    size: 'small',
};
