"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = exports.Size = void 0;
const react_1 = __importDefault(require("react"));
const GradientSpinner_1 = __importDefault(require("../GradientSpinner"));
exports.default = {
    title: 'Spinners/GradientSpinner',
    component: GradientSpinner_1.default,
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
    react_1.default.createElement(GradientSpinner_1.default, Object.assign({}, args))));
exports.Size = Template.bind({});
exports.Size.args = {
    startColor: 'rgb(186, 66, 255)',
    endColor: 'rgb(0, 225, 255)',
    innerColor: 'rgb(36, 36, 36)',
    size: '100px',
};
exports.Colors = Template.bind({});
exports.Colors.args = {
    startColor: 'rgb(255, 0, 0)',
    endColor: 'rgb(0, 255, 0)',
    innerColor: 'rgb(0, 0, 255)',
    size: '80px',
};
