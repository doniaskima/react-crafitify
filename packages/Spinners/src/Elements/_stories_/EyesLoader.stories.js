"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const EyesLoader_1 = __importDefault(require("../EyesLoader"));
const CenteredStory = ({ children }) => {
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        } }, children));
};
exports.default = {
    title: 'Spinners/EyesLoader',
    component: EyesLoader_1.default,
    argTypes: {
        size: {
            control: 'text',
            defaultValue: '20px',
        },
    },
};
const Template = (args) => (react_1.default.createElement(CenteredStory, null,
    react_1.default.createElement(EyesLoader_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {};
