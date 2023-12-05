"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const GradientButton_1 = __importDefault(require("../GradientButton"));
exports.default = {
    title: 'Buttons/GradientButton',
    component: GradientButton_1.default,
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
    react_1.default.createElement(GradientButton_1.default, Object.assign({}, args), "Gradient Button")));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.Customized = Template.bind({});
exports.Customized.args = {
    textColor: '#ffffff',
    bgColor: '#bd0fae',
    hoverBgColor: '#531b5c',
    fontSize: '20px',
    width: '200px',
    height: '50px',
};
