"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
   
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 4px;
  background-color: ${(props) => props.mainBgColor || '#560af0'};
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: ${(props) => (props.size === 'large' ? '18px' : props.size === 'small' ? '12px' : '14px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'large' ? '20px' : props.size === 'small' ? '10px' : '16px')};
  width: ${(props) => props.width || (props.size === 'large' ? '180px' : props.size === 'small' ? '100px' : '130px')};
  height: ${(props) => props.height || (props.size === 'large' ? '50px' : props.size === 'small' ? '30px' : '40px')};
  transition: all 0.2s;
  cursor: pointer;
  margin: 5px;

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.2s;
  }

  span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
    transition: 0.2s;
    color: ${(props) => props.arrowColor || '#FFFFFF'};
  }

  &:hover span {
    padding-right: 15px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }

  &:hover {
    color: ${(props) => props.mainBgColor || '#560af0'};
    background-color: #FFFFFF;
    box-shadow: 4px 5px 17px -4px ${(props) => props.mainBgColor || '#560af0'};
  }
}`;
const FancyArrowButton = (props) => {
    return (react_1.default.createElement(StyledButton, Object.assign({}, props),
        react_1.default.createElement("span", null, props.children)));
};
exports.default = FancyArrowButton;
