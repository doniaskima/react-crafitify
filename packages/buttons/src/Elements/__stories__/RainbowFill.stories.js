"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColorsAndPadding = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const RainbowFill_1 = __importDefault(require("../RainbowFill"));
exports.default = {
    title: 'Buttons/RainbowFill',
    component: RainbowFill_1.default,
    argTypes: {
        gradient: {
            control: {
                type: 'object',
            },
        },
        textColor: {
            control: {
                type: 'color',
            },
        },
        textBackground: {
            control: {
                type: 'color',
            },
        },
        padding: {
            control: {
                type: 'text',
            },
        },
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
    react_1.default.createElement(RainbowFill_1.default, Object.assign({}, args), "Button")));
exports.Default = Template.bind({});
exports.Default.args = {
    gradient: {
        start: 'blue',
        end: 'red',
    },
};
exports.CustomColorsAndPadding = Template.bind({});
exports.CustomColorsAndPadding.args = {
    gradient: {
        start: 'purple',
        end: 'orange',
    },
    textColor: 'white',
    textBackground: 'green',
    padding: '1.5rem 4rem',
};
