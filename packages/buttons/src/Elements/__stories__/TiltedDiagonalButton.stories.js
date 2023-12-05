"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomClasses = exports.CustomFontSize = exports.CustomColors = exports.IconAndTextButton = exports.LongText = exports.CustomAction = exports.CustomText = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const TiltedDiagonalButton_1 = __importDefault(require("../TiltedDiagonalButton"));
exports.default = {
    title: 'Buttons/TiltedDiagonalButton',
    component: TiltedDiagonalButton_1.default,
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
    react_1.default.createElement(TiltedDiagonalButton_1.default, Object.assign({}, args))));
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
exports.CustomAction = Template.bind({});
exports.CustomAction.args = {
    children: 'Click Me',
    onClick: () => console.log('Button clicked'),
};
exports.LongText = Template.bind({});
exports.LongText.args = {
    children: 'A Button with a Really Long Text',
};
exports.IconAndTextButton = Template.bind({});
exports.IconAndTextButton.args = {
    children: (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null, "\uD83C\uDF1F"),
        react_1.default.createElement("span", null, "Star"))),
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
exports.CustomClasses = Template.bind({});
exports.CustomClasses.args = {
    children: 'Custom Classes',
    className: 'my-custom-class',
    backgroundColor: '#FF5733',
    textColor: '#222',
    fontSize: '1.2rem',
};
