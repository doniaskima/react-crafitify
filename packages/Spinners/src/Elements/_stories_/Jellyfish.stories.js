"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Jellyfish_1 = __importDefault(require("../Jellyfish"));
exports.default = {
    title: 'Spinners/Jellyfish',
    component: Jellyfish_1.default,
    argTypes: {
        size: {
            control: { type: 'range', min: 100, max: 300, step: 10 },
        },
    },
};
const Template = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(Jellyfish_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    size: 200,
};
