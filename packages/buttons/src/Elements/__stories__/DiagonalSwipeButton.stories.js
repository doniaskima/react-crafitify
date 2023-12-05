"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHoverDesign = exports.CustomBorderRadius = exports.CustomColors = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const DiagonalSwipeButton_1 = __importDefault(require("../DiagonalSwipeButton"));
exports.default = {
    title: 'Buttons/DiagonalSwipeButton',
    component: DiagonalSwipeButton_1.default,
};
const CenteredTemplate = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(DiagonalSwipeButton_1.default, Object.assign({}, args))));
exports.Default = CenteredTemplate.bind({});
exports.Default.args = {
    children: 'Diagonal Swipe',
    width: '200px',
    height: '60px',
    fontSize: '20px',
};
exports.CustomColors = CenteredTemplate.bind({});
exports.CustomColors.args = {
    children: 'Custom Colors',
    textColor: 'green',
    borderColor: 'green',
    hoverColor: 'lightgreen',
};
exports.CustomBorderRadius = CenteredTemplate.bind({});
exports.CustomBorderRadius.args = {
    children: 'Custom Border Radius',
    borderRadius: '50px',
};
exports.CustomHoverDesign = CenteredTemplate.bind({});
exports.CustomHoverDesign.args = {
    children: 'Custom Hover Design',
    textColor: 'blue',
    borderColor: 'blue',
    hoverColor: 'lightblue',
};
