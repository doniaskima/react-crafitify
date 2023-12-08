"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rounded = exports.Large = exports.Small = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const RefreshButton_1 = __importDefault(require("../RefreshButton"));
exports.default = {
    title: 'Buttons/RefreshButton',
    component: RefreshButton_1.default,
};
const CenteredTemplate = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(RefreshButton_1.default, Object.assign({}, args))));
exports.Default = CenteredTemplate.bind({});
exports.Default.args = {
    children: 'Refresh',
};
exports.Small = CenteredTemplate.bind({});
exports.Small.args = {
    children: 'Small Refresh',
    style: { fontSize: '14px' },
};
exports.Large = CenteredTemplate.bind({});
exports.Large.args = {
    children: 'Large Refresh',
    style: { fontSize: '20px' },
};
exports.Rounded = CenteredTemplate.bind({});
exports.Rounded.args = {
    children: 'Rounded Refresh',
    style: { borderRadius: '1rem' },
};
