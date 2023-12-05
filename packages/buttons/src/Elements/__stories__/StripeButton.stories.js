"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const StripeButton_1 = __importDefault(require("../StripeButton"));
exports.default = {
    title: 'Buttons/StripeButton',
    component: StripeButton_1.default,
    argTypes: {
        children: { control: 'text' },
        disabled: { control: 'boolean' },
        backgroundColor: { control: 'color' },
        boxShadow: { control: 'text' },
        textColor: { control: 'color' },
        fontSize: { control: 'number' },
        height: { control: 'number' },
    },
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
    react_1.default.createElement(StripeButton_1.default, Object.assign({}, args), args.children)));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Stripe Button',
};
