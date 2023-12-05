"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect"); // For extended DOM matchers
const AnimatedButton_1 = __importDefault(require("../AnimatedButton"));
// Sample test cases
test('renders button with default label', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(AnimatedButton_1.default, null, "Click Me"));
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
});
test('calls custom onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = (0, react_2.render)(react_1.default.createElement(AnimatedButton_1.default, { onClick: onClickMock }, "Click Me"));
    const buttonElement = getByText('Click Me');
    react_2.fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
});
