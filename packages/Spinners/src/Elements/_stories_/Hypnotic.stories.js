"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Hypnotic_1 = __importDefault(require("../Hypnotic"));
exports.default = {
    title: 'Spinners/Hypnotic',
    component: Hypnotic_1.default,
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
    react_1.default.createElement(Hypnotic_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    size: '80px',
};
exports.Default.args = {};
