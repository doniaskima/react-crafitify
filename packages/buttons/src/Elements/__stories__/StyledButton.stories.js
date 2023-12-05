"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColors = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const StyledButton_1 = __importDefault(require("../StyledButton"));
exports.default = {
    title: 'Buttons/StyledButton',
    component: StyledButton_1.default,
};
const CenteredTemplate = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(StyledButton_1.default, Object.assign({}, args), "Sign up")));
exports.Default = CenteredTemplate.bind({});
exports.Default.args = {};
exports.CustomColors = CenteredTemplate.bind({});
exports.CustomColors.args = {
    style: {
        '--primary-color': '#FF5733',
        '--secondary-color': '#00FF00',
        '--hover-color': '#FFFF00',
    },
};
