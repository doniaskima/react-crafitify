"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const LinkedinButton_1 = __importDefault(require("../LinkedinButton"));
exports.default = {
    title: 'Buttons/LinkedinButton',
    component: LinkedinButton_1.default,
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
    react_1.default.createElement(LinkedinButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Linkedin Button',
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    children: 'Disabled Linkedin Button',
    disabled: true,
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Custom Linkedin Button',
    backgroundColor: '#FF5733',
    hoverBackgroundColor: '#FF734D',
    activeBackgroundColor: '#FF5733',
    textColor: '#FFF',
    fontSize: 18,
    height: 50,
    minWidth: 150,
};
