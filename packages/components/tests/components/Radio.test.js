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
const Radio_1 = require("../../components/Radio/Radio");
const jest_axe_1 = require("jest-axe");
describe("Switch", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(Radio_1.Radio, { isSelected: true, onChange: jest.fn() }, "Radio"));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Radio_1.Radio, { isSelected: true, onChange: jest.fn() }, "Radio"));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Props", () => {
    test("Should render label correctly.", () => {
        (0, react_1.render)(React.createElement(Radio_1.Radio, { isSelected: true, onChange: jest.fn() }, "Radio"));
        expect(react_1.screen.getByText("Radio")).toBeInTheDocument();
    });
    test("Should render unchecked correctly.", () => {
        (0, react_1.render)(React.createElement(Radio_1.Radio, { onChange: jest.fn() }, "Radio"));
        expect(react_1.screen.getByText("Radio")).not.toHaveClass("selected");
    });
    test("Should render disabled correctly.", () => {
        (0, react_1.render)(React.createElement(Radio_1.Radio, { disabled: true, onChange: jest.fn() }, "Radio"));
        expect(react_1.screen.getByText("Radio")).toHaveClass("disabled");
    });
});
