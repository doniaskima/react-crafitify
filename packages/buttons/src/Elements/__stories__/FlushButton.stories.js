"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = void 0;
const react_1 = __importDefault(require("react"));
const FlushButton_1 = __importDefault(require("../FlushButton"));
exports.default = {
    title: 'Buttons/FlushButton',
    component: FlushButton_1.default,
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
    react_1.default.createElement(FlushButton_1.default, Object.assign({}, args))));
exports.Customized = Template.bind({});
exports.Customized.args = {
    content: 'Custom Button',
    textColor: 'hsla(210, 50%, 85%, 1)',
    shadowColor: 'hsla(210, 40%, 52%, 0.4)',
    btnColor: 'hsl(210, 80%, 42%)',
    bgColor: '#141218',
    fontSize: '30px',
    width: '300px',
    height: '60px',
};
