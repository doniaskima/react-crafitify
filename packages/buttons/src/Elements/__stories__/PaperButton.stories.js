"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const PaperButton_1 = __importDefault(require("../PaperButton"));
exports.default = {
    title: 'Buttons/PaperButton',
    component: PaperButton_1.default,
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
    react_1.default.createElement(PaperButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Button',
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Custom Button',
    backgroundColor: '#e8e8e8',
    textColor: '#333',
    size: 'medium',
};
