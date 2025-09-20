"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const ThreeLineLoader_1 = __importDefault(require("../ThreeLineLoader"));
exports.default = {
    title: 'Spinners/ThreeLineLoader',
    component: ThreeLineLoader_1.default,
    argTypes: {
        color: { control: 'color', defaultValue: '#EFEFFA' },
        size: { control: 'text', defaultValue: '64px' },
    },
};
const Template = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(ThreeLineLoader_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
