"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerLinkButton = exports.ContainerButton = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const constants_1 = require("../../../constants");
exports.ContainerButton = styled_1.default.button(({ variant = 'primary', disabled, full = false, size = 'm', outline }) => ({
    background: disabled
        ? outline
            ? 'none'
            : constants_1.colors[`${variant}-lighter`]
        : outline
            ? 'none'
            : constants_1.colors[variant],
    color: outline ? constants_1.colors[variant] : 'white',
    width: full ? '100%' : 'fit-content',
    outline: 'none',
    fontWeight: 'bold',
    height: 'fit-content',
    fontSize: constants_1.CRAFT_FONT_SIZES[size],
    border: outline
        ? `2.8px solid ${disabled ? constants_1.colors[`${variant}-lighter`] : constants_1.colors[variant]} `
        : 'none',
    padding: outline
        ? `${constants_1.CRAFT_PADDING_SIZES[size] - 2.8}px 30px`
        : `${constants_1.CRAFT_PADDING_SIZES[size]}px 30px`,
    borderRadius: '10px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    letterSpacing: '.3px',
    transition: 'all .1s ease-in-out',
    '&:hover': {
        background: disabled
            ? outline
                ? 'none'
                : constants_1.colors[`${variant}-lighter`]
            : outline
                ? 'none'
                : constants_1.colors[`${variant}-darker`],
        opacity: outline ? (disabled ? 1 : '.7') : 1,
    },
    '&:focus': {
        outlineStyle: 'none',
    },
}));
exports.ContainerLinkButton = styled_1.default.a(({ variant = 'primary', size = 'm' }) => ({
    color: constants_1.colors[variant],
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: constants_1.CRAFT_FONT_SIZES[size],
    textDecoration: 'none',
    '&:hover': {
        color: constants_1.colors[`${variant}-darker`],
        textDecoration: 'underline',
    },
}));
