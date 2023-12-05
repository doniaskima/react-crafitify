"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const ReadyButton_1 = __importDefault(require("../ReadyButton"));
exports.default = {
    title: 'Buttons/ReadyButton',
    component: ReadyButton_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
        textColor: { control: 'color' },
        shadowColor: { control: 'color' },
        hoverColor: { control: 'color' },
        size: { control: 'text' },
        boxShadowColor: { control: 'color' },
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
    react_1.default.createElement(ReadyButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: "I'm Ready",
};
