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
const Select_1 = require("../../components/Select/Select");
const SelectItem_1 = require("../../components/Select/SelectItem");
const jest_axe_1 = require("jest-axe");
describe("Select", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(Select_1.Select, { onClose: jest.fn(), onOpen: jest.fn() },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Select_1.Select, { onClose: jest.fn(), onOpen: jest.fn() },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Interaction", () => {
    test("Should open SelectContainer on icon click.", () => {
        (0, react_1.render)(React.createElement(Select_1.Select, { isOpen: true, onClose: jest.fn(), onOpen: jest.fn(), placeholder: "Number" },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        (0, react_1.act)(() => react_1.screen.getByRole("button").click());
        expect(react_1.screen.getByText("30")).toBeInTheDocument();
        (0, react_1.act)(() => react_1.screen.getByRole("listitem").click());
    });
    test("Should open SelectContainer on placeholder click.", () => {
        (0, react_1.render)(React.createElement(Select_1.Select, { onClose: jest.fn(), onOpen: jest.fn(), placeholder: "Placeholder" },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        (0, react_1.act)(() => react_1.screen.getByText("Placeholder").click());
    });
    test("Should close SelectConatiner on label click.", () => {
        (0, react_1.render)(React.createElement(Select_1.Select, { isOpen: true, onClose: jest.fn(), onOpen: jest.fn(), selected: 0 },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        react_1.screen.getAllByText("30")[0].click();
    });
    test("Should close Select on click outside.", () => {
        (0, react_1.render)(React.createElement(Select_1.Select, { onClose: jest.fn(), onOpen: jest.fn() },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        react_1.fireEvent.mouseDown(document.body);
    });
    test("Should trigger onClose on Escape key down.", () => {
        const onClose = jest.fn();
        (0, react_1.render)(React.createElement(Select_1.Select, { isOpen: true, onOpen: jest.fn, onClose: onClose },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        react_1.fireEvent.keyDown(document.body, { key: "Escape" });
        expect(onClose).toHaveBeenCalledTimes(1);
    });
    test("Should trigger key down events correctly.", () => {
        const onClose = jest.fn();
        (0, react_1.render)(React.createElement(Select_1.Select, { isOpen: true, onClose: onClose, onOpen: jest.fn() },
            React.createElement(SelectItem_1.SelectItem, null, "30"),
            React.createElement(SelectItem_1.SelectItem, null, "40")));
        const selectItem = react_1.screen.getAllByRole("listitem")[0];
        const spaceEvent = react_1.createEvent.keyDown(selectItem, {
            code: "Space",
        });
        (0, react_1.fireEvent)(selectItem, spaceEvent);
        expect(onClose).toHaveBeenCalledTimes(1);
        const arrowUpEvent = react_1.createEvent.keyDown(selectItem, {
            code: "ArrowUp",
        });
        (0, react_1.fireEvent)(selectItem, arrowUpEvent);
        expect(onClose).toHaveBeenCalledTimes(1);
        const arrowDownEvent = react_1.createEvent.keyDown(selectItem, {
            code: "ArrowDown",
        });
        (0, react_1.fireEvent)(selectItem, arrowDownEvent);
        expect(onClose).toHaveBeenCalledTimes(1);
    });
    test("Should focus select items correctly.", () => {
        (0, react_1.render)(React.createElement(Select_1.Select, { isOpen: true, onClose: jest.fn(), onOpen: jest.fn() },
            React.createElement(SelectItem_1.SelectItem, null, "30"),
            React.createElement(SelectItem_1.SelectItem, null, "40")));
        const firstItem = react_1.screen.getAllByRole("listitem")[0];
        const secondItem = react_1.screen.getAllByRole("listitem")[1];
        expect(firstItem).toHaveFocus();
        const event1 = react_1.createEvent.keyDown(firstItem, {
            code: "ArrowDown",
        });
        (0, react_1.fireEvent)(firstItem, event1);
        expect(secondItem).toHaveFocus();
        const event2 = react_1.createEvent.keyDown(secondItem, {
            code: "ArrowDown",
        });
        (0, react_1.fireEvent)(secondItem, event2);
        expect(firstItem).toHaveFocus();
        const event3 = react_1.createEvent.keyDown(firstItem, {
            code: "ArrowUp",
        });
        (0, react_1.fireEvent)(firstItem, event3);
        expect(secondItem).toHaveFocus();
        const event4 = react_1.createEvent.keyDown(secondItem, {
            code: "ArrowUp",
        });
        (0, react_1.fireEvent)(secondItem, event4);
        expect(firstItem).toHaveFocus();
    });
});
describe("Props", () => {
    test("Should render children correctly.", () => {
        (0, react_1.render)(React.createElement(Select_1.Select, { isOpen: true, onClose: jest.fn(), onOpen: jest.fn(), placeholder: "Select" },
            React.createElement(SelectItem_1.SelectItem, null, "30"),
            React.createElement("div", null, "40")));
        expect(react_1.screen.getByRole("listbox")).not.toHaveTextContent("40");
    });
    test("Should render label correctly.", () => {
        (0, react_1.render)(React.createElement(Select_1.Select, { onClose: jest.fn(), onOpen: jest.fn(), placeholder: "Select" },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        expect(react_1.screen.getByText("Select")).toBeInTheDocument();
    });
    test("Should render correct Chevron when open.", () => {
        (0, react_1.render)(React.createElement(Select_1.Select, { isOpen: true, onClose: jest.fn(), onOpen: jest.fn() },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        expect(react_1.screen.getByLabelText("Chevron Up")).toBeInTheDocument();
    });
    test("Should render correct Chevron when closed.", () => {
        (0, react_1.render)(React.createElement(Select_1.Select, { onClose: jest.fn(), onOpen: jest.fn() },
            React.createElement(SelectItem_1.SelectItem, null, "30")));
        expect(react_1.screen.getByLabelText("Chevron Down")).toBeInTheDocument();
    });
});
