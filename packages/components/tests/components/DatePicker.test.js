"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const DatePicker_1 = require("../../components/DatePicker/DatePicker");
describe("DatePicker", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(DatePicker_1.DatePicker, { setValue: jest.fn() }));
        expect(container.firstChild).toMatchSnapshot();
    });
});
