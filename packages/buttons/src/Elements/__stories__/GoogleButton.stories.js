"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const GoogleButton_1 = __importDefault(require("../GoogleButton"));
exports.default = {
    title: 'Buttons/GoogleButton',
    component: GoogleButton_1.default,
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
    react_1.default.createElement(GoogleButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Google Button',
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Custom Google Button',
    backgroundColor: '#4285f4',
    borderColor: '#4285f4',
    hoverBorderColor: '#357ae8',
    textColor: '#ffffff',
    size: 'custom',
    customSize: '20px',
    borderWidth: 2,
};
