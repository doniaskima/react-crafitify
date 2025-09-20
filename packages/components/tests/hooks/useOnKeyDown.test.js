"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const hooks_1 = require("../../hooks");
describe("useOnKeyDown", () => {
    test("Should run handler on correct key down.", () => {
        const handler = jest.fn();
        (0, react_1.renderHook)(() => {
            (0, hooks_1.useOnKeyDown)(["Escape"], handler);
        });
        react_1.fireEvent.keyDown(document.body, { key: "Escape" });
        expect(handler).toHaveBeenCalledTimes(1);
    });
    test("Should not run handler on incorrect key down.", () => {
        const handler = jest.fn();
        (0, react_1.renderHook)(() => {
            (0, hooks_1.useOnKeyDown)(["Escape"], handler);
        });
        react_1.fireEvent.keyDown(document.body, { key: "ArrowUp" });
        expect(handler).toHaveBeenCalledTimes(0);
    });
});
