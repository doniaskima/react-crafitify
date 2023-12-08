"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
const FancyShadowButton_1 = __importDefault(require("../FancyShadowButton"));
describe('FancyShadowButton', () => {
    it('renders with the provided children', () => {
        const { getByText } = (0, react_2.render)(react_1.default.createElement(FancyShadowButton_1.default, null, "Click Me"));
        expect(getByText('Click Me')).toBeInTheDocument();
    });
    it('changes background color on hover', () => {
        const { getByText } = (0, react_2.render)(react_1.default.createElement(FancyShadowButton_1.default, { hoverColor: "#FF0000" }, "Hover Me"));
        const button = getByText('Hover Me');
        react_2.fireEvent.mouseEnter(button);
        expect(button).toHaveStyle('background-color: #FF0000');
        react_2.fireEvent.mouseLeave(button);
        expect(button).not.toHaveStyle('background-color: #FF0000');
    });
});
