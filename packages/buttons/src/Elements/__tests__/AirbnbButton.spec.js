"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const AirbnbButton_1 = __importDefault(require("../AirbnbButton"));
exports.default = {
    title: 'Buttons/AirbnbButton',
    component: AirbnbButton_1.default,
};
const Template = (args) => react_1.default.createElement(AirbnbButton_1.default, Object.assign({}, args), "Airbnb Button");
exports.Default = Template.bind({});
exports.Default.args = {
    disabled: false,
    backgroundColor: '#FFFFFF',
    borderColor: '#222222',
    hoverBackgroundColor: '#F7F7F7',
    hoverBorderColor: '#000000',
    textColor: '#222222',
    fontSize: 16,
    width: undefined,
    height: undefined,
    borderRadius: 8,
    borderWidth: 1,
};
