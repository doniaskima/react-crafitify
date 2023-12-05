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
const Menu_1 = require("../../components/Menu");
const jest_axe_1 = require("jest-axe");
const Button_1 = require("../../components/Button/Button");
const test_utils_1 = require("react-dom/test-utils");
// Disable console.error for each test in this file
// console.error Warning: `NaN` is an invalid value for the `left` css style property. (Ripples Click)
beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => undefined);
});
describe("Menu", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        const results = yield (0, jest_axe_1.axe)(container);
        expect(results).toHaveNoViolations();
    }));
});
describe("Interaction", () => {
    test("Should trigger onOpen when trigger is clicked.", () => {
        const onOpen = jest.fn();
        (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: false, onOpen: onOpen, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        (0, test_utils_1.act)(() => react_1.screen.getByRole("button").click());
        expect(onOpen).toHaveBeenCalledTimes(1);
    });
    test("Should trigger onClose when trigger is clicked.", () => {
        const onClose = jest.fn();
        (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: true, onOpen: jest.fn(), onClose: onClose, trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        (0, test_utils_1.act)(() => react_1.screen.getByRole("button").click());
        expect(onClose).toHaveBeenCalledTimes(1);
    });
    test("Should trigger onClose on Space on a Menu Item.", () => {
        const onClose = jest.fn();
        (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: true, onOpen: jest.fn(), onClose: onClose, trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        const firstMenuItem = react_1.screen.getAllByRole("menuitem")[0];
        const event = react_1.createEvent.keyDown(firstMenuItem, {
            code: "Space",
        });
        (0, react_1.fireEvent)(firstMenuItem, event);
        expect(onClose).toHaveBeenCalledTimes(1);
    });
    test("Should trigger onClose on Escape key down.", () => {
        const onClose = jest.fn();
        (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: true, onOpen: jest.fn(), onClose: onClose, trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        react_1.fireEvent.keyDown(document.body, { key: "Escape" });
        expect(onClose).toHaveBeenCalledTimes(1);
    });
    test("Should trigger onClose when Menu Item is clicked.", () => {
        const onClose = jest.fn();
        (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: true, onOpen: jest.fn(), onClose: onClose, trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        const firstMenuItem = react_1.screen.getAllByRole("menuitem")[0];
        firstMenuItem.click();
        expect(onClose).toHaveBeenCalledTimes(1);
    });
    test("Should handle focus correctly", () => {
        (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: true, onOpen: jest.fn(), onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One"),
            React.createElement(Menu_1.MenuSeparator, null),
            React.createElement(Menu_1.MenuItem, null, "Two"),
            React.createElement(Menu_1.MenuHeader, null, "Header"),
            React.createElement(Menu_1.MenuItem, null, "Three")));
        const firstMenuItem = react_1.screen.getAllByRole("menuitem")[0];
        expect(firstMenuItem).toHaveFocus();
        const event1 = react_1.createEvent.keyDown(firstMenuItem, {
            code: "ArrowDown",
        });
        (0, react_1.fireEvent)(firstMenuItem, event1);
        const secondMenuItem = react_1.screen.getAllByRole("menuitem")[1];
        expect(secondMenuItem).toHaveFocus();
        const event2 = react_1.createEvent.keyDown(secondMenuItem, {
            code: "ArrowDown",
        });
        (0, react_1.fireEvent)(secondMenuItem, event2);
        const thirdMenuItem = react_1.screen.getAllByRole("menuitem")[2];
        expect(thirdMenuItem).toHaveFocus();
        const event3 = react_1.createEvent.keyDown(thirdMenuItem, {
            code: "ArrowDown",
        });
        (0, react_1.fireEvent)(thirdMenuItem, event3);
        expect(firstMenuItem).toHaveFocus();
        const event4 = react_1.createEvent.keyDown(firstMenuItem, {
            code: "ArrowUp",
        });
        (0, react_1.fireEvent)(firstMenuItem, event4);
        expect(thirdMenuItem).toHaveFocus();
        const event5 = react_1.createEvent.keyDown(thirdMenuItem, {
            code: "ArrowUp",
        });
        (0, react_1.fireEvent)(thirdMenuItem, event5);
        expect(secondMenuItem).toHaveFocus();
    });
});
describe("Props", () => {
    test("Should render children correctly.", () => {
        (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        react_1.fireEvent.click(react_1.screen.getByRole("button"));
        expect(react_1.screen.getByRole("menuitem")).toHaveTextContent("One");
    });
    test("Should render trigger correctly.", () => {
        (0, react_1.render)(React.createElement(Menu_1.Menu, { isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        expect(react_1.screen.getAllByRole("button")[0]).toHaveTextContent("Trigger");
    });
    test("Should render alignment correctly.", () => {
        (0, react_1.render)(React.createElement(Menu_1.Menu, { alignment: "topLeft", isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        expect(react_1.screen.getByRole("menu")).toBeInTheDocument();
    });
    test("Should render closed correctly.", () => {
        (0, react_1.render)(React.createElement(Menu_1.Menu, { alignment: "topLeft", onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        expect(react_1.screen.queryByRole("menu")).not.toBeInTheDocument();
    });
    test.each([
        "bottomLeft",
        "bottomCenter",
        "bottomRight",
        "topLeft",
        "topCenter",
        "topRight",
    ])("Should render alignment correctly.", (alignment) => {
        (0, react_1.render)(React.createElement(Menu_1.Menu, { alignment: alignment, isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger") },
            React.createElement(Menu_1.MenuItem, null, "One")));
        expect(react_1.screen.getByRole("menuitem")).toBeInTheDocument();
    });
});
