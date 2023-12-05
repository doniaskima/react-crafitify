"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
// FancyGradientButton.stories.tsx
const react_1 = __importDefault(require("react"));
const FancyGradientButton_1 = __importDefault(require("../FancyGradientButton"));
exports.default = {
    title: 'Buttons/FancyGradientButton',
    component: FancyGradientButton_1.default,
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
    react_1.default.createElement(FancyGradientButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    size: 'medium',
    mainBgColor: '#814fd1',
    gradientBgColor1: 'rgb(222, 203, 226)',
    gradientBgColor2: 'rgb(79, 131, 209)',
    ringColor: '#6f00ff',
    shadowColor: 'rgba(79, 99, 209, 0.64)',
    hoverShadowColor: 'rgba(79, 99, 209, 0.64)',
    mainFgColor: '#313133',
    hoverFgColor: 'rgb(38, 11, 53)',
    children: 'Button',
};
