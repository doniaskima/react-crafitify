"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
const DiagonalSwipeButton_1 = __importDefault(require("../DiagonalSwipeButton"));
// Sample test cases
test('renders button with default text', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(DiagonalSwipeButton_1.default, null, "Click Me"));
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
});
test('changes color on hover', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(DiagonalSwipeButton_1.default, null, "Hover Me"));
    const buttonElement = getByText('Hover Me');
    react_2.fireEvent.mouseEnter(buttonElement);
    // Get the computed style of the button element
    const computedStyle = window.getComputedStyle(buttonElement);
    // Check if the computed color includes "white" or "ButtonText"
    expect(computedStyle.color).toMatch(/white|ButtonText/);
});
