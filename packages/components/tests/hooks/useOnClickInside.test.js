"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const React = __importStar(require("react"));
const hooks_1 = require("../../hooks");
describe("useOnClickInside", () => {
    test("Should run handler on click inside element.", () => {
        const handler = jest.fn();
        const { result } = (0, react_1.renderHook)(() => {
            const ref = React.useRef(null);
            (0, hooks_1.useOnClickInside)(ref, handler);
            return ref;
        });
        const buttonRef = result.current;
        (0, react_1.render)(React.createElement("button", { type: "button", ref: buttonRef }, "Button"));
        react_1.fireEvent.mouseDown(react_1.screen.getByRole("button"));
        expect(handler).toHaveBeenCalledTimes(1);
    });
    test("Should run handler on click multiple elements.", () => {
        const handler = jest.fn();
        const { result } = (0, react_1.renderHook)(() => {
            const ref1 = React.useRef(null);
            const ref2 = React.useRef(null);
            const ref3 = React.useRef(null);
            (0, hooks_1.useOnClickInside)([ref1, ref2, ref3], handler);
            return { ref1, ref2, ref3 };
        });
        const { ref1, ref2, ref3 } = result.current;
        (0, react_1.render)(React.createElement(React.Fragment, null,
            React.createElement("button", { type: "button", ref: ref1 }, "Button"),
            React.createElement("button", { type: "button", ref: ref2 }, "Button"),
            React.createElement("button", { type: "button", ref: ref3 }, "Button")));
        react_1.fireEvent.mouseDown(react_1.screen.getAllByRole("button")[0]);
        react_1.fireEvent.mouseDown(react_1.screen.getAllByRole("button")[1]);
        react_1.fireEvent.mouseDown(react_1.screen.getAllByRole("button")[2]);
        expect(handler).toHaveBeenCalledTimes(3);
    });
    test("Should not run handler on click outside element.", () => {
        const handler = jest.fn();
        const { result } = (0, react_1.renderHook)(() => {
            const ref = React.useRef(null);
            (0, hooks_1.useOnClickInside)(ref, handler);
            return ref;
        });
        const buttonRef = result.current;
        (0, react_1.render)(React.createElement("button", { type: "button", ref: buttonRef }, "Button"));
        react_1.fireEvent.mouseDown(document.body);
        expect(handler).toHaveBeenCalledTimes(0);
    });
});
