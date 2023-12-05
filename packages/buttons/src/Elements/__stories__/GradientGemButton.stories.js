"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomWidthAndHeight = exports.CustomFontSize = exports.CustomColor = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const GradientGemButton_1 = __importDefault(require("../GradientGemButton"));
exports.default = {
    title: 'Buttons/GradientGemButton',
    component: GradientGemButton_1.default,
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
    react_1.default.createElement(GradientGemButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    backgroundColor: 'linear-gradient(144deg, #FF6347, #1E90FF 50%, #32CD32)',
    textColor: '#FFFFFF',
    spanBackgroundColor: 'rgb(5, 6, 45)',
    spanBackgroundHover: 'none',
};
exports.CustomFontSize = Template.bind({});
exports.CustomFontSize.args = {
    fontSize: '24px',
};
exports.CustomWidthAndHeight = Template.bind({});
exports.CustomWidthAndHeight.args = {
    width: '200px',
    height: '60px',
};
