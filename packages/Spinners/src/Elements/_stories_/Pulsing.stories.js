"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Pulsing_1 = __importDefault(require("../Pulsing"));
exports.default = {
    title: 'Spinners/Pulsing',
    component: Pulsing_1.default,
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
    react_1.default.createElement(Pulsing_1.default, { color: args.color, size: args.size })));
exports.Default = Template.bind({});
exports.Default.args = {
    color: '#000',
    size: '20px',
};
