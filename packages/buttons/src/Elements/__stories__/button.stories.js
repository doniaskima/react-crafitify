"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const Button_1 = __importDefault(require("../Button/Button"));
exports.default = {
    title: 'Buttons/Button',
    component: Button_1.default,
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        loading: {
            description: 'State of loading for the button',
            control: { type: 'radio', options: [true, false] },
        },
        full: {
            description: 'Full width for the button',
            control: { type: 'radio', options: [true, false] },
        },
        size: {
            description: 'Size of the button',
            control: { type: 'select' },
            options: ['sm', 'm', 'lg'],
        },
        disabled: {
            description: 'Disabled for the button',
            control: { type: 'radio', options: [true, false] },
        },
        outline: {
            description: 'Outline for the button',
            control: { type: 'radio', options: [true, false] },
        },
        label: {
            defaultValue: '',
            description: 'Text to display in the button',
            control: { type: 'text' },
        },
        color: {
            description: 'Color of the button',
            options: ['primary', 'secondary', 'error'],
            control: { type: 'select' },
        },
        as: {
            options: ['a', 'button'],
            description: 'The type of element to render',
            control: { type: 'select' },
        },
        href: {
            defaultValue: '',
            control: { type: 'text' },
            description: 'The URL to the button',
        },
    },
};
const Template = (args) => (React.createElement("div", { style: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
    } },
    React.createElement(Button_1.default, Object.assign({}, args)),
    React.createElement("br", null),
    React.createElement(Button_1.default, Object.assign({}, args, { disabled: true }))));
exports.Default = Template.bind({});
exports.Default.args = {
    label: 'Click me!',
};
