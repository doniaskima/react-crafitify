"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallSize = exports.CustomColors = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const ColorRing_1 = __importDefault(require("../ColorRing"));
exports.default = {
    title: 'Spinners/ColorRing',
    component: ColorRing_1.default,
    argTypes: {
        width: { control: 'text' },
        height: { control: 'text' },
        colors: { control: 'array' },
        className: { control: 'text' },
        wrapperStyle: { control: 'object' },
        ariaLabel: { control: 'text' },
    },
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
    react_1.default.createElement(ColorRing_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.CustomColors = Template.bind({});
exports.CustomColors.args = {
    colors: ['#ff0000', '#00ff00', '#0000ff'],
};
exports.SmallSize = Template.bind({});
exports.SmallSize.args = {
    width: '40',
    height: '40',
};
