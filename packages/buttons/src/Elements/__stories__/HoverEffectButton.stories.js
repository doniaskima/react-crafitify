"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomText = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const HoverEffectButton_1 = __importDefault(require("../HoverEffectButton"));
exports.default = {
    title: 'Buttons/HoverEffectButton',
    component: HoverEffectButton_1.default,
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
    react_1.default.createElement(HoverEffectButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Button',
};
exports.CustomText = Template.bind({});
exports.CustomText.args = {
    children: 'Custom Text',
};
