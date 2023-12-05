"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const FancyOutlineButton_1 = __importDefault(require("../FancyOutlineButton"));
exports.default = {
    title: 'Buttons/FancyOutlineButton',
    component: FancyOutlineButton_1.default,
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
    react_1.default.createElement(FancyOutlineButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'BUTTON',
    color: '#DAA06D',
    hoverColor: '#FFA500',
    activeColor: '#FF4500',
    size: 'medium',
};
