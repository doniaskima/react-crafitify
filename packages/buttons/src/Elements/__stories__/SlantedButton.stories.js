"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const SlantedButton_1 = __importDefault(require("../SlantedButton"));
exports.default = {
    title: 'Buttons/SlantedButton',
    component: SlantedButton_1.default,
};
const Template = (args) => react_1.default.createElement(SlantedButton_1.default, Object.assign({}, args), "Button");
exports.Default = Template.bind({});
exports.Default.args = {};
