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
const Chart_1 = require("../../components/Chart");
const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const data = [
    {
        name: "2018",
        Angular: getRandomInteger(4000, 5000),
        React: getRandomInteger(1000, 2000),
        Vue: getRandomInteger(0, 1000),
    },
    {
        name: "2019",
        Angular: getRandomInteger(4000, 5000),
        React: getRandomInteger(3000, 4000),
        Vue: getRandomInteger(500, 1500),
    },
    {
        name: "2020",
        Angular: getRandomInteger(2000, 3000),
        React: getRandomInteger(4000, 5000),
        Vue: getRandomInteger(2000, 3000),
    },
    {
        name: "2021",
        Angular: getRandomInteger(1000, 2000),
        React: getRandomInteger(5000, 6000),
        Vue: getRandomInteger(4000, 5000),
    },
];
const dataKeys = ["React", "Angular", "Vue"];
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Chart_1.Chart, { data: data, dataKeys: dataKeys, title: "Most Popular Javascript Frameworks" }));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Props", () => {
    test.each(["line", "bar"])("Should render variants correctly.", (type) => {
        (0, react_1.render)(React.createElement(Chart_1.Chart, { data: data, dataKeys: dataKeys, title: `${type} Chart`, type: type }));
        expect(react_1.screen.getByText(`${type} Chart`)).toBeInTheDocument();
    });
});
