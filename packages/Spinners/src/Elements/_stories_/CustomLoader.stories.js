"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomClassName = exports.CustomBackgroundColor = exports.CustomText = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const CustomLoader_1 = __importDefault(require("../CustomLoader"));
exports.default = {
    title: 'Spinners/CustomLoader',
    component: CustomLoader_1.default,
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
    react_1.default.createElement(CustomLoader_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    text: 'Loading...',
};
exports.CustomText = Template.bind({});
exports.CustomText.args = {
    text: 'Custom Text',
    textColor: '#FF0000',
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    text: 'Custom Background Color',
    backgroundColor: '#00FF00',
};
exports.CustomClassName = Template.bind({});
exports.CustomClassName.args = {
    text: 'Custom Class Name',
    className: 'custom-loader',
};
