"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect"); // Import this to use jest-dom matchers
const PrimaryButton_1 = require("../PrimaryButton");
describe('PrimaryButton', () => {
    test('renders the button with the default label', () => {
        const { getByText } = (0, react_2.render)(react_1.default.createElement(PrimaryButton_1.PrimaryButton, null, "Click Me"));
        expect(getByText('Click Me')).toBeInTheDocument();
    });
    test('renders the button as disabled', () => {
        const { getByText } = (0, react_2.render)(react_1.default.createElement(PrimaryButton_1.PrimaryButton, { disabled: true }, "Disabled Button"));
        expect(getByText('Disabled Button')).toBeDisabled();
    });
    test('renders the button with custom class name', () => {
        const { getByText, container } = (0, react_2.render)(react_1.default.createElement(PrimaryButton_1.PrimaryButton, { className: "custom-button" }, "Custom Style"));
        const button = getByText('Custom Style');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('custom-button');
        expect(container.firstChild).toMatchSnapshot();
    });
    test('calls the custom onClick handler when clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = (0, react_2.render)(react_1.default.createElement(PrimaryButton_1.PrimaryButton, { onClick: onClickMock }, "Custom OnClick"));
        const button = getByText('Custom OnClick');
        react_2.fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
