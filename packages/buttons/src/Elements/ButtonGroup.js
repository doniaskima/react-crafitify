"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ButtonGroupWrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  gap: 8px;
`;
const ButtonGroupButton = styled_components_1.default.button `
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff80;
  text-shadow: none;
  background: transparent;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
  border: 2px solid #ffffff80;

  &:hover,
  &:focus {
    color: #ffffff;
    background: #008cff;
    border: 2px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;
  }
};`;
const ButtonGroup = ({ vertical, children }) => {
    return react_1.default.createElement(ButtonGroupWrapper, { vertical: vertical }, children);
};
ButtonGroup.Button = ButtonGroupButton;
exports.default = ButtonGroup;
