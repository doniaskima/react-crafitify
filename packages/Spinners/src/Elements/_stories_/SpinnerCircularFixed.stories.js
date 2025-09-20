"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const SpinnerCircularFixed_1 = require("../SpinnerCircularFixed");
exports.default = {
    title: 'Spinners/SpinnerCircularFixed',
    component: SpinnerCircularFixed_1.SpinnerCircularFixed,
};
const Template = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(SpinnerCircularFixed_1.SpinnerCircularFixed, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    secondaryColor: '#3189fc',
    speed: 100,
    still: false,
    thickness: 4,
    width: 66,
    height: 66,
};
