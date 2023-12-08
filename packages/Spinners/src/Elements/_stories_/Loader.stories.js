"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const Loader_1 = __importDefault(require("../Loader"));
exports.default = {
    title: 'Spinners/Loader',
    component: Loader_1.default,
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        type: {
            description: 'Type of the loader component',
            options: ['ring', 'rotate', 'dots'],
            control: { type: 'select' },
        },
        color: {
            control: { type: 'color' },
        },
    },
};
const Template = (args) => (React.createElement("div", { style: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
        gap: '50px',
    } },
    React.createElement(Loader_1.default, Object.assign({}, args)),
    React.createElement(Loader_1.default, Object.assign({}, args, { type: "rotate" })),
    React.createElement(Loader_1.default, Object.assign({}, args, { type: "dots" }))));
exports.Default = Template.bind({});
exports.Default.args = {
    size: 32,
    borderSize: 4,
};
