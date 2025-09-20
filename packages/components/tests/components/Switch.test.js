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
const Switch_1 = require("../../components/Switch/Switch");
const jest_axe_1 = require("jest-axe");
describe("Switch", () => {
    test("Should render component correctly.", () => {
        // Fixes some jest-axe issues
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
        // Fixes some jest-axe issues
        const { container } = (0, react_1.render)(React.createElement(Switch_1.Switch, { isOn: true, onClick: jest.fn(), label: " Switch Label" }));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Switch_1.Switch, { isOn: true, onClick: jest.fn(), label: "Switch Label" }));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Props", () => {
    test("Should render label correctly.", () => {
        const label = "Switch Label";
        (0, react_1.render)(React.createElement(Switch_1.Switch, { isOn: true, onClick: jest.fn(), label: label }));
        expect(react_1.screen.getByRole("switch")).toHaveTextContent(label);
    });
    test("Should render on correctly.", () => {
        (0, react_1.render)(React.createElement(Switch_1.Switch, { isOn: true, onClick: jest.fn(), label: "Switch Label" }));
        expect(react_1.screen.getByRole("switch")).toHaveClass("on");
    });
    test("Should render off correctly.", () => {
        (0, react_1.render)(React.createElement(Switch_1.Switch, { onClick: jest.fn(), label: "Switch Label" }));
        expect(react_1.screen.getByRole("switch")).not.toHaveClass("on");
    });
});
