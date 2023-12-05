"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const TextField_1 = require("../../components/TextField/TextField");
const jest_axe_1 = require("jest-axe");
describe("TextField", () => {
    // Fixes some jest-axe issues
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
    // Fixes some jest-axe issues
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(TextField_1.TextField, { onChange: jest.fn() }));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(TextField_1.TextField, { onChange: jest.fn() }));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Props", () => {
    test.each(["small", "medium", "large"])("Should render size correctly.", (size) => {
        (0, react_1.render)(React.createElement(TextField_1.TextField, { onChange: jest.fn(), size: size }));
        expect(react_1.screen.getByLabelText("textfield")).toHaveClass(size);
    });
    test("Should render disabled correctly.", () => {
        (0, react_1.render)(React.createElement(TextField_1.TextField, { disabled: true, onChange: jest.fn() }));
        expect(react_1.screen.getByLabelText("textfield")).toHaveClass("disabled");
    });
    test("Should render label correctly.", () => {
        (0, react_1.render)(React.createElement(TextField_1.TextField, { label: "label", onChange: jest.fn() }));
        expect(react_1.screen.getByLabelText("label")).toBeInTheDocument();
    });
    test.each([
        "email",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "time",
        "url",
    ])("Should render type correctly.", (type) => {
        (0, react_1.render)(React.createElement(TextField_1.TextField, { onChange: jest.fn(), type: type }));
        expect(react_1.screen.getByLabelText("textfield")).toHaveAttribute("type", type);
    });
    test("Should render trailing icon correctly.", () => {
        (0, react_1.render)(React.createElement(TextField_1.TextField, { onChange: jest.fn(), trailingIcon: "trailing" }));
        expect(react_1.screen.getByText("trailing")).toBeInTheDocument();
    });
});
