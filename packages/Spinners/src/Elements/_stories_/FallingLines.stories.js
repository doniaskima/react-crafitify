"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const FallingLines_1 = __importDefault(require("../FallingLines"));
exports.default = {
    title: 'Spinners/FallingLines',
    component: FallingLines_1.default,
    argTypes: {
        color: { control: 'color' },
        width: { control: 'text' },
        height: { control: 'text' },
        visible: { control: 'boolean' },
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
    react_1.default.createElement(FallingLines_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    color: '#000000',
    width: '100',
    height: '100',
    visible: true,
};
