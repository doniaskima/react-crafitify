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
const Popup_1 = require("../../components/Popup");
const jest_axe_1 = require("jest-axe");
const Button_1 = require("../../components/Button");
describe("Popup", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(Popup_1.Popup, { onClose: jest.fn(), onOpen: jest.fn(), text: "Popup" },
            React.createElement(Button_1.Button, null, "Trigger")));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Popup_1.Popup, { onClose: jest.fn(), onOpen: jest.fn(), text: "Popup" },
            React.createElement(Button_1.Button, null, "Trigger")));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Interaction", () => {
    test("Should trigger onOpen and onClose correctly.", () => {
        const onOpen = jest.fn();
        const onClose = jest.fn();
        (0, react_1.render)(React.createElement(React.Fragment, null,
            React.createElement("button", null, "Button"),
            React.createElement(Popup_1.Popup, { onClose: onClose, onOpen: onOpen, text: "Popup" },
                React.createElement(Button_1.Button, null, "Trigger"))));
        react_1.screen.getAllByRole("button")[1].focus();
        expect(onOpen).toHaveBeenCalledTimes(1);
        react_1.screen.getAllByRole("button")[0].focus();
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
describe("Props", () => {
    test.each(["bottom", "top", "left", "right"])("Should render position correctly.", (position) => {
        (0, react_1.render)(React.createElement(Popup_1.Popup, { isOpen: true, onClose: jest.fn(), onOpen: jest.fn(), position: position, text: "Popup" },
            React.createElement(Button_1.Button, null, "Trigger")));
        expect(react_1.screen.getByRole("tooltip")).toHaveClass(position);
    });
    test("Should render indicator correctly.", () => {
        (0, react_1.render)(React.createElement(Popup_1.Popup, { hasIndicator: true, isOpen: true, onClose: jest.fn(), onOpen: jest.fn(), text: "Popup" },
            React.createElement(Button_1.Button, null, "Trigger")));
        expect(react_1.screen.getByRole("tooltip")).toHaveClass("indicator");
    });
});
