"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Codecite_1 = __importDefault(require("../Codecite"));
exports.default = {
    title: 'Spinners/Codecite',
    component: Codecite_1.default,
    argTypes: {
        colors: {
            control: 'text',
        },
        size: { control: 'text' },
    },
};
const Template = (args) => {
    let colors = [];
    if (args.colors) {
        if (typeof args.colors === 'string') {
            colors = args.colors.split(',').map(color => color.trim());
        }
        else {
            // Assume it's an array of colors
            colors = args.colors;
        }
    }
    return react_1.default.createElement(Codecite_1.default, Object.assign({}, args, { colors: colors }));
};
exports.Default = Template.bind({});
exports.Default.args = {
    colors: ['#A32EFF', '#A32EFF', '#A32EFF', '#A32EFF', '#A32EFF', '#A32EFF', '#A32EFF', '#A32EFF'],
    size: '150px',
};
