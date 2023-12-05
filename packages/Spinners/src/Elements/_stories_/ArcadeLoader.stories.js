"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const ArcadeLoader_1 = __importDefault(require("../ArcadeLoader"));
exports.default = {
    title: 'Spinners/ArcadeLoader',
    component: ArcadeLoader_1.default,
    argTypes: {
        size: {
            control: 'text',
        },
        color: {
            control: 'color',
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
    react_1.default.createElement(ArcadeLoader_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {};
