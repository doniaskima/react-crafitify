"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Small = exports.Default = void 0;
// FancyArrowButton.stories.tsx
const react_1 = __importDefault(require("react"));
const FancyArrowButton_1 = __importDefault(require("../FancyArrowButton"));
exports.default = {
    title: 'Buttons/FancyArrowButton',
    component: FancyArrowButton_1.default,
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
    react_1.default.createElement(FancyArrowButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Button',
};
exports.Small = Template.bind({});
exports.Small.args = {
    children: 'Small Button',
    size: 'small',
    mainBgColor: '#FF5733',
    arrowColor: '#FFF',
    width: '100px',
    height: '30px',
};
