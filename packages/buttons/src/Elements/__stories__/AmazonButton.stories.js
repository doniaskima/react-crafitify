"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const AmazonButton_1 = __importDefault(require("../AmazonButton"));
exports.default = {
    title: 'Buttons/AmazonButton',
    component: AmazonButton_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
        textColor: { control: 'color' },
        fontSize: { control: 'number' },
        width: { control: 'text' },
    },
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
    react_1.default.createElement(AmazonButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Amazon',
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Custom Button',
    backgroundColor: '#ff9900',
    borderColor: '#ff9900',
    textColor: '#ffffff',
    fontSize: 16,
    width: '150px',
};
