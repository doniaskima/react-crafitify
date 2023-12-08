"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontSize = exports.CustomColors = exports.CustomText = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const ProgressRightButton_1 = __importDefault(require("../ProgressRightButton"));
exports.default = {
    title: 'Buttons/ProgressRightButton',
    component: ProgressRightButton_1.default,
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
    react_1.default.createElement(ProgressRightButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Button',
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    children: 'Disabled Button',
    disabled: true,
};
exports.CustomText = Template.bind({});
exports.CustomText.args = {
    children: 'Custom Text',
};
exports.CustomColors = Template.bind({});
exports.CustomColors.args = {
    children: 'Custom Colors',
    backgroundColor: '#3498db',
    textColor: '#ffffff',
};
exports.CustomFontSize = Template.bind({});
exports.CustomFontSize.args = {
    children: 'Custom Font Size',
    fontSize: '1.5rem',
};
