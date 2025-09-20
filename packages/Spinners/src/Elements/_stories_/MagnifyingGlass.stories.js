"use strict";
// MagnifyingGlass.stories.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const MagnifyingGlass_1 = __importDefault(require("../MagnifyingGlass"));
exports.default = {
    title: 'Spinners/MagnifyingGlass',
    component: MagnifyingGlass_1.default,
    argTypes: {
        visible: { control: 'boolean' },
        height: { control: 'text' },
        width: { control: 'text' },
        className: { control: 'text' },
        wrapperStyle: { control: 'object' },
        ariaLabel: { control: 'text' },
        glassColor: { control: 'color' },
        color: { control: 'color' },
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
    react_1.default.createElement(MagnifyingGlass_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    visible: true,
    height: '80',
    width: '80',
    className: '',
    wrapperStyle: {},
    ariaLabel: 'magnifying-glass-loading',
    glassColor: '#c0efff',
    color: '#e15b64',
};
