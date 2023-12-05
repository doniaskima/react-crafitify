"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSizeButton = exports.CustomColorButton = exports.SmallButton = exports.LargeButton = exports.Secondary = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const CustomStyledButton_1 = __importDefault(require("../CustomStyledButton"));
exports.default = {
    title: 'Buttons/CustomStyledButton',
    component: CustomStyledButton_1.default,
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
    react_1.default.createElement(CustomStyledButton_1.default, Object.assign({}, args))));
exports.Primary = Template.bind({});
exports.Primary.args = {
    design: 'primary',
    children: 'To the Galaxy',
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    design: 'secondary',
    children: 'Explore',
};
exports.LargeButton = Template.bind({});
exports.LargeButton.args = {
    size: 'large',
    children: 'Large Button',
};
exports.SmallButton = Template.bind({});
exports.SmallButton.args = {
    size: 'small',
    children: 'Small Button',
};
exports.CustomColorButton = Template.bind({});
exports.CustomColorButton.args = {
    backgroundColor: '#ff6600',
    textColor: '#ffffff',
    hoverColor: '#ff8c1a',
    activeColor: '#ff1a1a',
    children: 'Custom Color Button',
};
exports.CustomSizeButton = Template.bind({});
exports.CustomSizeButton.args = {
    size: 'medium',
    width: '150px',
    height: '50px',
    children: 'Custom Size Button',
};
