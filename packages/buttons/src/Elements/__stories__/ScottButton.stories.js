"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const ScottButton_1 = __importDefault(require("../ScottButton")); // Make sure to import the correct path
exports.default = {
    title: 'Buttons/ScottButton',
    component: ScottButton_1.default,
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
    react_1.default.createElement(ScottButton_1.default, Object.assign({}, args), "Scott Button")));
exports.Default = Template.bind({});
exports.Default.args = {
    borderColor: '#18181a',
    textColor: '#18181a',
    hoverBgColor: 'black',
    hoverTextColor: 'white',
    altText: 'Alternate text',
};
