"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const DNA_1 = __importDefault(require("../DNA"));
exports.default = {
    title: 'Spinners/DNA',
    component: DNA_1.default,
    argTypes: {
        width: {
            control: 'text',
        },
        height: {
            control: 'text',
        },
        visible: {
            control: 'boolean',
        },
        className: {
            control: 'text',
        },
        ariaLabel: {
            control: 'text',
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
    react_1.default.createElement(DNA_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    width: '80',
    height: '80',
    visible: true,
    className: '',
    ariaLabel: 'dna-loading',
};
