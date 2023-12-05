"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  cursor:pointer;
  background-color: ${(props) => props.backgroundColor || '#7e0097'};
  color: ${(props) => props.textColor || '#cc00ff'};
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: ${(props) => props.fontSize || '100%'};
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  text-transform: uppercase;

  &:disabled {
    cursor: default;
  }

  &:-moz-focusring {
    outline: auto;
  }

  svg {
    display: block;
    vertical-align: middle;
  }

  [hidden] {
    display: none;
  }

  border-radius: 99rem;
  border-width: 2px;
  overflow: hidden;
  padding: 0.8rem 3rem;
  position: relative;

  span {
    mix-blend-mode: difference;
  }


  &:before {
    background: #fff;
    content: "";
    display: block;
    height: 100%;
    left: -100%;
    position: absolute;
    top: 0;
    transform: skew(0deg) translateX(-20%);
    transition: transform 0.2s ease;
    width: 120%;
  }

  &:hover:before {
    transform: skew(45deg) translateX(75%);
  }
`;
const TiltedDiagonalButton = ({ onClick, disabled, children, backgroundColor, textColor, fontSize, className, }) => {
    return (react_1.default.createElement(StyledButton, { className: className, onClick: onClick, disabled: disabled, backgroundColor: backgroundColor, textColor: textColor, fontSize: fontSize },
        react_1.default.createElement("span", null, children)));
};
exports.default = TiltedDiagonalButton;
