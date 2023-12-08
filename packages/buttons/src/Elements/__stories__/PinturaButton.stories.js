"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const PinturaButton_1 = __importDefault(require("../PinturaButton"));
exports.default = {
    title: 'Buttons/PinturaButton',
    component: PinturaButton_1.default,
    argTypes: {
        children: { control: 'text' },
        background: { control: 'color' },
        hoverBackground: { control: 'color' },
        borderColor: { control: 'color' },
        textColor: { control: 'color' },
        fontSize: { control: 'text' },
        width: { control: 'text' },
        height: { control: 'text' },
        boxShadow: { control: 'text' },
        disabled: { control: 'boolean' },
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
    react_1.default.createElement(PinturaButton_1.default, Object.assign({}, args), args.children)));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Pintura Button',
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    children: 'Disabled Pintura Button',
    disabled: true,
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Customized',
    background: 'linear-gradient(to bottom right, #EF4765, #FF9A5A)',
    hoverBackground: '#FF9A5A',
    borderColor: '#FF9A5A',
    textColor: '#FFFFFF',
    fontSize: '20px',
    width: '200px',
    height: '60px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
};
