"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithClassName = exports.CustomSize = exports.CustomColor = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const CubeLoader_1 = __importDefault(require("../CubeLoader"));
exports.default = {
    title: 'Spinners/CubeLoader',
    component: CubeLoader_1.default,
};
const CenteredStory = ({ children }) => {
    return (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } }, children));
};
const Template = (args) => (react_1.default.createElement(CenteredStory, null,
    react_1.default.createElement(CubeLoader_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    color: '#3498db',
    borderColor: '#e74c3c',
};
exports.CustomSize = Template.bind({});
exports.CustomSize.args = {
    size: '80px',
};
exports.WithClassName = Template.bind({});
exports.WithClassName.args = {
    className: 'my-custom-class',
};
