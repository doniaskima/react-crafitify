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
const Dialog_1 = require("../../components/Dialog/Dialog");
const Button_1 = require("../../components/Button/Button");
const ButtonSet_1 = require("../../components/ButtonSet/ButtonSet");
const jest_axe_1 = require("jest-axe");
describe("Dialog", () => {
    test("Should render component correctly.", () => {
        const { container } = (0, react_1.render)(React.createElement(Dialog_1.Dialog, { content: "Dialog Content", isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger"), title: "Dialog Title" }));
        expect(container.firstChild).toMatchSnapshot();
    });
});
describe("Accessibility", () => {
    test("Should have no accessibility violations.", () => __awaiter(void 0, void 0, void 0, function* () {
        const { container } = (0, react_1.render)(React.createElement(Dialog_1.Dialog, { content: "Dialog Content", isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger"), title: "Dialog Title" }));
        const results = (0, jest_axe_1.axe)(container, {
            rules: { tabindex: { enabled: false } },
        });
        expect(yield results).toHaveNoViolations();
    }));
});
describe("Interaction", () => {
    test("Should trigger onClose on Escape key down.", () => {
        const onClose = jest.fn();
        (0, react_1.render)(React.createElement(Dialog_1.Dialog, { content: "Dialog Content", isOpen: true, onOpen: jest.fn, onClose: onClose, trigger: React.createElement(Button_1.Button, null, "Trigger"), title: "Dialog Title" }));
        react_1.fireEvent.keyDown(document.body, { key: "Escape" });
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
describe("Props", () => {
    test("Should render buttons correctly.", () => {
        (0, react_1.render)(React.createElement(Dialog_1.Dialog, { buttons: React.createElement(ButtonSet_1.ButtonSet, null,
                React.createElement(Button_1.Button, { variant: "secondary" }, "Cancel"),
                React.createElement(Button_1.Button, { variant: "secondary" }, "Confirm")), content: "Dialog Content", isOpen: true, onOpen: jest.fn(), onClose: jest.fn(), trigger: React.createElement(Button_1.Button, { variant: "secondary" }, "Open Dialog!"), title: "Dialog Title" }));
        expect(react_1.screen.getByText("Cancel")).toBeInTheDocument();
        expect(react_1.screen.getByText("Confirm")).toBeInTheDocument();
    });
    test("Should render content correctly.", () => {
        (0, react_1.render)(React.createElement(Dialog_1.Dialog, { content: "Dialog Content", isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger"), title: "Dialog Title" }));
        expect(react_1.screen.getByText("Dialog Content")).toBeInTheDocument();
    });
    test("Should render closed correctly.", () => {
        (0, react_1.render)(React.createElement(Dialog_1.Dialog, { content: "Dialog Content", onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger"), title: "Dialog Title" }));
        expect(react_1.screen.queryByText("Dialog Title")).not.toBeInTheDocument();
    });
    test("Should render title correctly.", () => {
        (0, react_1.render)(React.createElement(Dialog_1.Dialog, { content: "Dialog Content", isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger"), title: "Dialog Title" }));
        expect(react_1.screen.getByText("Dialog Title")).toBeInTheDocument();
    });
    test.each(["bottom", "center", "left", "right"])("Should render variants correctly.", (variant) => {
        (0, react_1.render)(React.createElement(Dialog_1.Dialog, { ariaLabel: variant, buttons: React.createElement(ButtonSet_1.ButtonSet, null,
                React.createElement(Button_1.Button, null, "Cancel"),
                React.createElement(Button_1.Button, null, "Confirm")), content: "Dialog Content", isOpen: true, onOpen: jest.fn, onClose: jest.fn(), trigger: React.createElement(Button_1.Button, null, "Trigger"), title: "Dialog Title", variant: variant }));
        expect(react_1.screen.getByRole("dialog")).toHaveClass(variant);
    });
});
