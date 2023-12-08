"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const AppleButton_1 = __importDefault(require("../AppleButton"));
exports.default = {
    title: 'Buttons/AppleButton',
    component: AppleButton_1.default,
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
    react_1.default.createElement(AppleButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Apple Button',
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    children: 'Disabled Apple Button',
    disabled: true,
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Custom Apple Button',
    backgroundColor: '#FF5733',
    borderColor: '#FF5733',
    hoverBackgroundColor: '#FF734D',
    hoverBorderColor: '#FF734D',
    textColor: '#FFF',
    fontSize: 20,
    height: 48,
    borderWidth: 2,
    activeBackgroundColor: '#0067B9',
    activeBorderColor: '#006DBC',
};
