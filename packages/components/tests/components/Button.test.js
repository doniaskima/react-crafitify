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
const Button_1 = require("../../components/Button/Button");
const jest_axe_1 = require("jest-axe");
describe("Button", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(Button_1.Button, null, "Button"));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Button_1.Button, null, "Button"));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Props", () => {
    test.each(["primary", "secondary"])("Should render variants correctly.", (variant) => {
        (0, react_1.render)(React.createElement(Button_1.Button, { variant: variant }, "Button"));
        expect(react_1.screen.getByRole("button", { name: "Button" })).toHaveClass(variant);
    });
    test.each(["small", "medium", "large"])("Should render sizes correctly", (size) => {
        (0, react_1.render)(React.createElement(Button_1.Button, { size: size }, "Button"));
        expect(react_1.screen.getByRole("button", { name: "Button" })).toHaveClass(size);
    });
    test("Should render leading icon correctly.", () => {
        (0, react_1.render)(React.createElement(Button_1.Button, { leadingIcon: "leading" }, "Button"));
        expect(react_1.screen.getByRole("button", { name: "leading Button" })).toBeInTheDocument();
    });
    test("Should render trailing icon correctly.", () => {
        (0, react_1.render)(React.createElement(Button_1.Button, { trailingIcon: "trailing" }, "Button"));
        expect(react_1.screen.getByRole("button", { name: "Button trailing" })).toBeInTheDocument();
    });
    test("Should render children correctly.", () => {
        (0, react_1.render)(React.createElement(Button_1.Button, null, "Button"));
        expect(react_1.screen.getByRole("button", { name: "Button" })).toBeInTheDocument();
    });
    test("Should render disabled correctly.", () => {
        (0, react_1.render)(React.createElement(Button_1.Button, { disabled: true }, "Button"));
        expect(react_1.screen.getByRole("button", { name: "Button" })).toHaveClass("disabled");
    });
    test.each(["button", "reset", "submit"])("Should render type correctly.", (type) => {
        (0, react_1.render)(React.createElement(Button_1.Button, { type: type }, "Button"));
        expect(react_1.screen.getByRole("button", { name: "Button" })).toHaveAttribute("type", type);
    });
});
