"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const FancyLetterSpacingButton_1 = __importDefault(require("../FancyLetterSpacingButton"));
exports.default = {
    title: 'Buttons/FancyLetterSpacingButton',
    component: FancyLetterSpacingButton_1.default,
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
    react_1.default.createElement(FancyLetterSpacingButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'BUTTON',
    color: 'black',
    hoverColor: 'white',
    activeColor: 'white',
    letterSpacing: '0.2em',
    hoverLetterSpacing: '0.5em',
    activeLetterSpacing: '0.4em',
    size: 'medium',
    backgroundColor: 'transparent',
    hoverBackgroundColor: '#171717',
};
