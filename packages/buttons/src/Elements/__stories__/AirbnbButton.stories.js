"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const AirbnbButton_1 = __importDefault(require("../AirbnbButton"));
exports.default = {
    title: 'Buttons/AirbnbButton',
    component: AirbnbButton_1.default,
    argTypes: {
        children: { control: 'text' },
        disabled: { control: 'boolean' },
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
        hoverBackgroundColor: { control: 'color' },
        hoverBorderColor: { control: 'color' },
        textColor: { control: 'color' },
        fontSize: { control: 'number' },
        width: { control: 'number' },
        height: { control: 'number' },
        borderRadius: { control: 'number' },
        borderWidth: { control: 'number' },
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
    react_1.default.createElement(AirbnbButton_1.default, Object.assign({}, args), args.children)));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Airbnb Button',
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    children: 'Disabled Airbnb Button',
    disabled: true,
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Customized',
    backgroundColor: '#542dc9',
    borderColor: '#222222',
    hoverBackgroundColor: '#6d5cc5',
    hoverBorderColor: '#333333',
    textColor: '#000000',
    fontSize: 15,
    width: 150,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
};
