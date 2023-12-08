"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Rounded = exports.Large = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const AnimatedButton_1 = __importDefault(require("../AnimatedButton"));
exports.default = {
    title: 'Buttons/AnimatedButton',
    component: AnimatedButton_1.default,
    parameters: {
        docs: {
            description: {
                component: 'A button with animated hover and active effects.',
            },
            source: {
                code: `<AnimatedButton>Hover Me!</AnimatedButton>`,
            },
            props: {
                bgColor: 'The background color of the button.',
                textColor: 'The text color of the button.',
                hoverColor: 'The color of the button when hovered.',
                activeColor: 'The color of the button when active.',
                children: 'The content of the button.',
            },
        },
    },
};
const CenteredTemplate = (args) => (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
    react_1.default.createElement(AnimatedButton_1.default, Object.assign({}, args))));
exports.Default = CenteredTemplate.bind({});
exports.Default.args = {
    children: 'Hover Me!',
};
exports.Large = CenteredTemplate.bind({});
exports.Large.args = {
    children: ' Hover Me!',
    fontSize: '1.3em',
    width: '160px',
    height: '50px',
};
exports.Rounded = CenteredTemplate.bind({});
exports.Rounded.args = {
    children: ' Hover Me!',
    style: { borderRadius: '10px' },
};
exports.CustomColor = CenteredTemplate.bind({});
exports.CustomColor.args = {
    children: '  Hover Me!',
    bgColor: '#ff9900',
    textColor: '#fff',
    hoverColor: '#ff0000',
    activeColor: '#00ff00',
};
