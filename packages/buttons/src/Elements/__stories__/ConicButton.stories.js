"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Default = void 0;
const ConicButton_1 = __importDefault(require("../ConicButton"));
exports.default = {
    title: 'Buttons/ConicButton',
    component: ConicButton_1.default,
    argTypes: {
        children: { control: 'text' },
        color: { control: 'color' },
        fontSize: { control: 'text' },
        width: { control: 'text' },
        height: { control: 'text' },
    },
};
const CenteredStory = ({ children }) => {
    return (React.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        } }, children));
};
const Template = (args) => (React.createElement(CenteredStory, null,
    React.createElement(ConicButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Conic Button',
};
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    children: 'Custom Color Button',
    color: '#FF5733',
    fontSize: '20px',
    width: '150px',
    height: '50px',
};
