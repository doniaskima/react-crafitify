"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColors = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const SpinnerCircular_1 = require("../SpinnerCircular");
exports.default = {
    title: 'Spinners/SpinnerCircular',
    component: SpinnerCircular_1.SpinnerCircular,
};
const Template = args => (react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' } },
    react_1.default.createElement(SpinnerCircular_1.SpinnerCircular, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    secondaryColor: '#1BFD9C',
    speed: 100,
    still: false,
    thickness: 50,
};
exports.CustomColors = Template.bind({});
exports.CustomColors.args = {
    secondaryColor: '#FF5733',
    speed: 20,
    still: true,
    thickness: 30,
};
