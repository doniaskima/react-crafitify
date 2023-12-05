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
  background-color: ${(props) => props.backgroundColor || '#000'};
  background-image: none;
  color: ${(props) => props.textColor || '#fff'};
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
    --tilt: 1.2rem;
    background: #fff;
    -webkit-clip-path: polygon(
      0 0,
      calc(100% - var(--tilt)) 0,
      100% 50%,
      calc(100% - var(--tilt)) 100%,
      0 100%
    );
    clip-path: polygon(
      0 0,
      calc(100% - var(--tilt)) 0,
      100% 50%,
      calc(100% - var(--tilt)) 100%,
      0 100%
    );
    content: "";
    display: block;
    height: 100%;
    left: calc(-100% - var(--tilt));
    position: absolute;
    top: 0;
    transform: translateX(var(--progress, 0));
    transition: transform 0.2s ease;
    width: calc(100% + var(--tilt));
  }

  &:hover:before {
    --progress: 100%;
  }
`;
const RushTriangButton = ({ onClick, disabled, children, backgroundColor, textColor, fontSize, className, }) => {
    return (react_1.default.createElement(StyledButton, { className: `btn-5 ${className || ''}`, onClick: onClick, disabled: disabled, backgroundColor: backgroundColor, textColor: textColor, fontSize: fontSize },
        react_1.default.createElement("span", null, children)));
};
exports.default = RushTriangButton;
