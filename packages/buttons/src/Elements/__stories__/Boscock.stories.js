"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const BoscockButton_1 = __importDefault(require("../BoscockButton"));
exports.default = {
    title: 'Buttons/Boscock',
    component: BoscockButton_1.default,
};
const CenteredStory = ({ children }) => {
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        } }, children));
};
const Template = (args) => (react_1.default.createElement(CenteredStory, null,
    react_1.default.createElement(BoscockButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Click Me :3',
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Custom Button',
    backgroundColor: 'blue',
    fontSize: '18px',
    width: '150px',
    height: '40px',
};
