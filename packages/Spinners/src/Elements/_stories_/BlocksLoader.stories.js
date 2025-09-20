"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const BlocksLoader_1 = __importDefault(require("../BlocksLoader"));
exports.default = {
    title: 'Spinners/BlocksLoader',
    component: BlocksLoader_1.default,
    argTypes: {
        visible: { control: 'boolean' },
        width: { control: 'text' },
        height: { control: 'text' },
        className: { control: 'text' },
        wrapperStyle: { control: 'object' },
        ariaLabel: { control: 'text' },
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
    react_1.default.createElement(BlocksLoader_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    visible: true,
    width: '80',
    height: '80',
    className: '',
    wrapperStyle: {},
    ariaLabel: 'blocks-loading',
};
