"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColorAndSize = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const BlueLoader_1 = __importDefault(require("../BlueLoader"));
exports.default = {
    title: 'Spinners/BlueLoader',
    component: BlueLoader_1.default,
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
    react_1.default.createElement(BlueLoader_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    color: '#004dff',
    size: '56px'
};
exports.CustomColorAndSize = Template.bind({});
exports.CustomColorAndSize.args = {
    color: '#ff0000',
    size: '100px'
};
