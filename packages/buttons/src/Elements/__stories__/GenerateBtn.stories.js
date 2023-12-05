"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sparkling = exports.Loading = exports.Disabled = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const GenerateBtn_1 = __importDefault(require("../GenerateBtn"));
exports.default = {
    title: 'Buttons/GenerateBtn',
    component: GenerateBtn_1.default,
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        children: {
            description: 'Content to display inside the button',
            control: { type: 'text' },
        },
        disabled: {
            description: 'Disables the button',
            control: { type: 'boolean' },
        },
        loading: {
            description: 'Shows a loading spinner in the button',
            control: { type: 'boolean' },
        },
        onClick: {
            description: 'Custom onClick event handler',
            action: 'Button Clicked!',
        },
        width: {
            description: 'Width of the button',
            control: { type: 'text' },
        },
        height: {
            description: 'Height of the button',
            control: { type: 'text' },
        },
        backgroundColor: {
            description: 'Background color of the button',
            control: { type: 'color' },
        },
        hoverGradient: {
            description: 'Hover gradient color of the button',
            control: { type: 'color' },
        },
    },
};
const Template = (args) => (react_1.default.createElement("div", { style: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
    } },
    react_1.default.createElement(GenerateBtn_1.default, Object.assign({}, args), args.children),
    react_1.default.createElement("br", null),
    react_1.default.createElement(GenerateBtn_1.default, Object.assign({}, args, { disabled: true }))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Click Me',
    width: '15em',
    height: '5em',
    backgroundColor: '#1C1A1C',
    hoverGradient: 'linear-gradient(0deg, #A47CF3, #683FEA)',
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    children: 'Disabled Button',
    disabled: true,
    width: '15em',
    height: '5em',
    backgroundColor: '#1C1A1C',
    hoverGradient: 'linear-gradient(0deg, #A47CF3, #683FEA)',
};
exports.Loading = Template.bind({});
exports.Loading.args = {
    children: 'Loading...',
    loading: true,
    width: '15em',
    height: '5em',
    backgroundColor: '#1C1A1C',
    hoverGradient: 'linear-gradient(0deg, #A47CF3, #683FEA)',
};
exports.Sparkling = Template.bind({});
exports.Sparkling.args = {
    children: 'Sparkling Button',
    onClick: () => alert('Button Clicked!'),
    width: '15em',
    height: '5em',
    backgroundColor: '#1C1A1C',
    hoverGradient: 'linear-gradient(0deg, #A47CF3, #683FEA)',
};
