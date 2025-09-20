"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const LoadingText_1 = __importDefault(require("../LoadingText"));
exports.default = {
    title: 'Spinners/LoadingText',
    component: LoadingText_1.default,
};
const CenteredStory = ({ children }) => {
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        } }, children));
};
const Template = () => (react_1.default.createElement(LoadingText_1.default, null));
exports.Default = Template.bind({});
