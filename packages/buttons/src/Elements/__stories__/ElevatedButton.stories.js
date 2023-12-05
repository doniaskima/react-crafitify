"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const ElevatedButton_1 = __importDefault(require("../ElevatedButton"));
exports.default = {
    title: 'Buttons/ElevatedButton',
    component: ElevatedButton_1.default,
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
    react_1.default.createElement(ElevatedButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Button',
    backgroundColor: '#3bbfa9',
    textColor: '#FFF',
    fontSize: '16px',
    hoverEffect: true,
    boxShadowBase: 'rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,' +
        'rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,' +
        'rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,' +
        'rgba(44, 187, 99, 0.15) 0 16px 32px',
};
