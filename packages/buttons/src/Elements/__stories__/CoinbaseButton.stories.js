"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const CoinbaseButton_1 = __importDefault(require("../CoinbaseButton"));
exports.default = {
    title: 'Buttons/CoinbaseButton',
    component: CoinbaseButton_1.default,
    argTypes: {
        children: { control: 'text' },
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
        textColor: { control: 'color' },
        fontSize: { control: 'number' },
        width: { control: 'text' },
        height: { control: 'text' },
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
    react_1.default.createElement(CoinbaseButton_1.default, Object.assign({}, args), args.children)));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Coinbase Button',
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    children: 'Disabled Coinbase Button',
    disabled: true,
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Customized Coinbase Button',
    backgroundColor: '#FF5733',
    borderColor: '#FF5733',
    textColor: '#FFFFFF',
    fontSize: '18px',
    width: '200px',
    height: '50px',
};
