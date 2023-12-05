"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyle = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const MelodySpinner_1 = __importDefault(require("../MelodySpinner/MelodySpinner"));
exports.default = {
    title: 'Spinners/MelodySpinner',
    component: MelodySpinner_1.default,
};
const Template = (args) => react_1.default.createElement(MelodySpinner_1.default, Object.assign({}, args));
exports.Default = Template.bind({});
exports.Default.args = {
    style: { width: '200px', height: '200px' },
};
exports.CustomStyle = Template.bind({});
exports.CustomStyle.args = {
    style: { width: '300px', height: '300px', backgroundColor: 'lightgray' },
};
