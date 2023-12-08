"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customized = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const BlobButton_1 = __importDefault(require("../BlobButton"));
exports.default = {
    title: 'Buttons/BlobButton',
    component: BlobButton_1.default,
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
    react_1.default.createElement(BlobButton_1.default, Object.assign({}, args))));
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Blob Button',
};
exports.Customized = Template.bind({});
exports.Customized.args = {
    children: 'Custom Blob Button',
    padding: '20px 40px',
    fontSize: '20px',
    textColor: 'red',
    hoverTextColor: 'white',
    borderColor: 'green',
    borderSize: '3px',
    borderRadius: '50px',
    innerBackgroundColor: 'blue',
    blobColor: 'yellow',
    blobWidth: '30%',
};
