"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const ShadowButton_1 = __importDefault(require("../ShadowButton"));
exports.default = {
    title: 'Buttons/ShadowButton',
    component: ShadowButton_1.default,
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
    react_1.default.createElement(ShadowButton_1.default, Object.assign({}, args), "Shadow Button")));
exports.Default = Template.bind({});
exports.Default.args = {
    textColor: '#000',
    border: '3px solid',
    hoverTextColor: '#fff',
    hoverBorder: '3px solid #38D2D2',
    hoverBackgroundColor: '#38D2D2',
};
