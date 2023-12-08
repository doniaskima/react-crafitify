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
const Typography_1 = require("../../components/Typography/Typography");
const jest_axe_1 = require("jest-axe");
describe("Switch", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(Typography_1.Typography, null, "Typography"));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Typography_1.Typography, null, "Typography"));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Props", () => {
    test.each(["h1", "h2", "h3"])("Should render type correctly.", (type) => {
        (0, react_1.render)(React.createElement(Typography_1.Typography, { type: type }, "Typography"));
        expect(react_1.screen.getByText("Typography")).toHaveClass(`typography${type}`);
    });
    test.each(["primary", "secondary"])("Should render variant correctly.", (variant) => {
        (0, react_1.render)(React.createElement(Typography_1.Typography, { variant: variant }, "Typography"));
        expect(react_1.screen.getByText("Typography")).toHaveClass(variant);
    });
    test.each(["light", "normal", "bold"])("Should render weight correctly.", (weight) => {
        (0, react_1.render)(React.createElement(Typography_1.Typography, { weight: weight }, "Typography"));
        expect(react_1.screen.getByText("Typography")).toHaveClass(weight);
    });
});
