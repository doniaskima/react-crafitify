"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithFocus = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const MacOsButton_1 = __importDefault(require("../MacOsButton"));
exports.default = {
    title: 'Buttons/MacOsButton',
    component: MacOsButton_1.default,
    argTypes: {
        children: { control: 'text' },
        backgroundColor: { control: 'color' },
        textColor: { control: 'color' },
        borderColor: { control: 'color' },
        borderWidth: { control: 'number' },
        boxShadow: { control: 'text' },
        width: { control: 'text' },
        height: { control: 'text' },
        size: {
            control: {
                type: 'radio',
                options: ['small', 'medium', 'large'],
            },
        },
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
    react_1.default.createElement(MacOsButton_1.default, Object.assign({}, args), args.children)));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'MacOs Button',
    width: 100,
    height: 40,
};
exports.WithFocus = Template.bind({});
exports.WithFocus.args = {
    children: 'Focus Me',
    borderColor: '#3A6CD9',
    borderWidth: 2,
    boxShadow: '0px 0.5px 1px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#EFEFEF',
    textColor: '#555555',
};
