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
const jest_axe_1 = require("jest-axe");
const Alert_1 = require("../../components/Alert/Alert");
describe("Alert", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(Alert_1.Alert, null, "This is an alert!"));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Alert_1.Alert, null, "This is an alert!"));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Props", () => {
    test("Should render children correctly.", () => {
        (0, react_1.render)(React.createElement(Alert_1.Alert, null, "Alert"));
        expect(react_1.screen.getByText("Alert")).toBeInTheDocument();
    });
    test("Should render close button correctly.", () => {
        (0, react_1.render)(React.createElement(Alert_1.Alert, { closeable: true }, "Alert"));
        const closeButton = react_1.screen.getByRole("button");
        expect(closeButton).toBeInTheDocument();
        (0, react_1.act)(() => closeButton.click());
    });
    test.each(["error", "info", "success", "warning"])("Should render variants correctly.", (variant) => {
        (0, react_1.render)(React.createElement(Alert_1.Alert, { closeable: true, variant: variant }, "Alert"));
        expect(document.getElementsByClassName("alertContainer")[0]).toHaveClass(variant);
        expect(react_1.screen.getByRole("button")).toBeInTheDocument();
    });
});
