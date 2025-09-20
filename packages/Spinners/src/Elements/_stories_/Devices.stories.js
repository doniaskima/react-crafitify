"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Large = exports.Medium = exports.Small = void 0;
const react_1 = __importDefault(require("react"));
const Devices_1 = __importDefault(require("../Devices"));
exports.default = {
    title: 'Spinners/Devices',
    component: Devices_1.default,
};
const Template = (args) => react_1.default.createElement(Devices_1.default, Object.assign({}, args));
exports.Small = Template.bind({});
exports.Small.args = {
    width: '80px',
    height: '50px',
};
exports.Medium = Template.bind({});
exports.Medium.args = {
    width: '160px',
    height: '100px',
};
exports.Large = Template.bind({});
exports.Large.args = {
    width: '240px',
    height: '150px',
};
