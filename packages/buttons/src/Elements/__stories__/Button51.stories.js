"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Button51_1 = __importDefault(require("../Button51"));
exports.default = {
    title: 'Buttons/Button51',
    component: Button51_1.default,
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
    react_1.default.createElement(Button51_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Button 51',
    pseudoBackgroundColor: '#D5EDF6',
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Customized Button',
    backgroundColor: '#FC6C85',
    borderColor: '#FF5733',
    textColor: '#FFFFFF',
    pseudoBackgroundColor: '#FFD1DC',
    hoverPseudoBackgroundColor: '#ef66d8',
    fontSize: '20px',
    height: '',
    fontWeight: 100,
};
