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
const Pagination_1 = require("../../components/Pagination");
const jest_axe_1 = require("jest-axe");
describe("Pagination", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(Pagination_1.Pagination, { currentPage: 2, pages: 3, onChangePage: jest.fn() }));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Pagination_1.Pagination, { currentPage: 2, pages: 3, onChangePage: jest.fn() }));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Interaction", () => {
    test("Should decrease page on left chevron click.", () => {
        (0, react_1.render)(React.createElement(Pagination_1.Pagination, { currentPage: 2, pages: 3, onChangePage: jest.fn() }));
        expect(react_1.screen.getAllByRole("button")[2]).toHaveTextContent("2");
        expect(react_1.screen.getAllByRole("button")[2]).toHaveClass("currentPageIcon");
        react_1.screen.getAllByRole("button")[0].click();
        expect(react_1.screen.getAllByRole("button")[2]).toHaveTextContent("2");
        expect(react_1.screen.getAllByRole("button")[2]).toHaveClass("currentPageIcon");
        react_1.screen.getAllByRole("button")[4].click();
        expect(react_1.screen.getAllByRole("button")[2]).toHaveTextContent("2");
        expect(react_1.screen.getAllByRole("button")[2]).toHaveClass("currentPageIcon");
    });
    test("Should not trigger onChangePage on page button click.", () => {
        (0, react_1.render)(React.createElement(Pagination_1.Pagination, { currentPage: 1, pages: 1, onChangePage: jest.fn() }));
        react_1.screen.getAllByRole("button")[0].click();
        react_1.screen.getAllByRole("button")[2].click();
    });
    test("Should trigger onChangePage on page button click.", () => {
        const onChangePage = jest.fn();
        (0, react_1.render)(React.createElement(Pagination_1.Pagination, { currentPage: 5, pages: 10, onChangePage: onChangePage }));
        react_1.screen.getAllByRole("button")[2].click();
        expect(onChangePage).toHaveBeenCalledTimes(1);
    });
});
