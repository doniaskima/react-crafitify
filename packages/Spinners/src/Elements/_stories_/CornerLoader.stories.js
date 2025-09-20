"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomClass = exports.CustomSize = exports.CustomColor = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const CornerLoader_1 = __importDefault(require("../CornerLoader"));
exports.default = {
    title: 'Spinners/CornerLoader',
    component: CornerLoader_1.default,
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
    react_1.default.createElement(CornerLoader_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    color: 'blue',
};
exports.CustomSize = Template.bind({});
exports.CustomSize.args = {
    size: '5rem',
};
exports.CustomClass = Template.bind({});
exports.CustomClass.args = {
    className: 'my-custom-class',
};
