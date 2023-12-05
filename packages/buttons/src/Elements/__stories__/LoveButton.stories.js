"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeSize = exports.MediumSize = exports.SmallSize = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Lovebtn_1 = __importDefault(require("../Lovebtn"));
exports.default = {
    title: 'Buttons/LoveButton',
    component: Lovebtn_1.default,
};
const Template = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(Lovebtn_1.default, Object.assign({}, args), "Hover Me!")));
exports.Default = Template.bind({});
exports.Default.args = {};
exports.SmallSize = Template.bind({});
exports.SmallSize.args = {
    size: 'small',
};
exports.MediumSize = Template.bind({});
exports.MediumSize.args = {
    size: 'medium',
};
exports.LargeSize = Template.bind({});
exports.LargeSize.args = {
    size: 'large',
};
