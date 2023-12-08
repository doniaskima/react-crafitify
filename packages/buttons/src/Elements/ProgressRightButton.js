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

  border-radius: 999px;
  border-width: 2px;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 1.2rem 3rem;
  position: relative;
  text-transform: uppercase;

  span {
    font-weight: 900;
    mix-blend-mode: difference;
  }

  &:before {
    background: #fff;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
  }

  &:hover:before {
    -webkit-animation: progress-bar 1.2s;
    animation: progress-bar 1.2s;
  }

  @-webkit-keyframes progress-bar {
    0% {
      opacity: 1;
      width: 0;
    }
    10% {
      opacity: 1;
      width: 15%;
    }
    25% {
      opacity: 1;
      width: 25%;
    }
    40% {
      opacity: 1;
      width: 35%;
    }
    55% {
      opacity: 1;
      width: 75%;
    }
    60% {
      opacity: 1;
      width: 100%;
    }
    to {
      opacity: 0;
      width: 100%;
    }
  }

  @keyframes progress-bar {
    0% {
      opacity: 1;
      width: 0;
    }
    10% {
      opacity: 1;
      width: 15%;
    }
    25% {
      opacity: 1;
      width: 25%;
    }
    40% {
      opacity: 1;
      width: 35%;
    }
    55% {
      opacity: 1;
      width: 75%;
    }
    60% {
      opacity: 1;
      width: 100%;
    }
    to {
      opacity: 0;
      width: 100%;
    }
  }
`;
const ProgressRightButton = ({ onClick, disabled, children, backgroundColor, textColor, fontSize, borderColor, className, }) => {
    return (react_1.default.createElement(StyledButton, { className: `btn-80 ${className || ''}`, onClick: onClick, disabled: disabled, backgroundColor: backgroundColor, textColor: textColor, fontSize: fontSize, borderColor: borderColor },
        react_1.default.createElement("span", null, children)));
};
exports.default = ProgressRightButton;
