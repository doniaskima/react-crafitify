"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallSize = exports.LargeSize = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const CustomIconButton_1 = __importDefault(require("../CustomIconButton"));
exports.default = {
    title: 'Buttons/CustomIconButton',
    component: CustomIconButton_1.default,
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
    react_1.default.createElement(CustomIconButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Hover me',
};
exports.LargeSize = Template.bind({});
exports.LargeSize.args = {
    children: 'Hover me',
    size: 'large',
    backgroundColor: '#6a92ef',
    textColor: 'white',
    hoverColor: 'hsl(217, 77%, 71%)',
    activeColor: 'hsl(218, 76%, 84%)',
    width: '200px',
    height: '60px',
};
exports.SmallSize = Template.bind({});
exports.SmallSize.args = {
    children: 'Hover me',
    size: 'small',
    backgroundColor: '#3c3c3c',
    textColor: '#fff',
    hoverColor: 'hsl(180, 77%, 71%)',
    activeColor: 'hsl(218, 76%, 84%)',
    width: '120px',
    height: '30px',
};
