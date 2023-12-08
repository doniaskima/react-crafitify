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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Button_styles_1 = require("./Button.styles");
function Button(_a, ref) {
    var { as, className = '', loading, size = 'm', label, full, href, disabled, color = 'primary' } = _a, otherPrimaryButtonProps = __rest(_a, ["as", "className", "loading", "size", "label", "full", "href", "disabled", "color"]);
    const renderChildren = () => (react_1.default.createElement("span", { className: "break-words w-full" }, label));
    if (as === 'a' || href) {
        const _b = otherPrimaryButtonProps, { htmlProps } = _b, aProps = __rest(_b, ["htmlProps"]);
        return (react_1.default.createElement(Button_styles_1.ContainerLinkButton, Object.assign({ size: size, variant: color, ref: ref, href: href, className: className }, htmlProps, aProps), renderChildren()));
    }
    const _c = otherPrimaryButtonProps, { htmlProps } = _c, buttonProps = __rest(_c, ["htmlProps"]);
    return (react_1.default.createElement(Button_styles_1.ContainerButton, Object.assign({ size: size, variant: color, full: full, ref: ref, type: "button", disabled: !!(disabled || loading), className: className }, htmlProps, buttonProps), renderChildren()));
}
exports.default = (0, react_1.forwardRef)(Button);
