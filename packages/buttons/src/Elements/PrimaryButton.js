"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryButton = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const getButtonPadding = (size) => {
    switch (size) {
        case 'small':
            return '6px 12px';
        case 'medium':
            return '8px 16px';
        case 'large':
            return '12px 24px';
        default:
            return '8px 16px';
    }
};
const PrimaryButtonWrapper = styled_components_1.default.button `
  padding: ${props => getButtonPadding(props.size)}; // Use size for padding
  font-size: 16px;
  background-color: var(--primary-color, #007bff);
  color: var(--button-text-color, white);
  border: none;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;
const PrimaryButton = (_a) => {
    var { onClick, disabled, children } = _a, rest = __rest(_a, ["onClick", "disabled", "children"]);
    return (react_1.default.createElement(PrimaryButtonWrapper, Object.assign({ onClick: onClick, disabled: disabled }, rest), children));
};
exports.PrimaryButton = PrimaryButton;
