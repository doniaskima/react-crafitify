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
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  width: ${(props) => props.width || '130px'};
  height: ${(props) => props.height || '40px'};
  font-size: ${(props) => props.fontSize || '1.1em'};
  cursor: pointer;
  background-color: ${(props) => props.bgColor || '#171717'};
  color: ${(props) => props.textColor || '#fff'};
  border: none;
  border-radius: 5px;
  transition: all 0.4s;

  &:hover {
    border-radius: 5px;
    transform: translateY(-10px);
    box-shadow: ${(props) => `0 7px 0 -2px ${props.hoverColor || '#f85959'},
       0 15px 0 -4px ${props.shadowColor || '#39a2db'},
       0 16px 10px -3px ${props.shadowColor || '#39a2db'}`};
  }

  &:active {
    transition: all 0.2s;
    transform: translateY(-5px);
    box-shadow: ${(props) => `0 2px 0 -2px ${props.activeColor || '#f85959'},
       0 8px 0 -4px ${props.shadowColor || '#39a2db'},
       0 12px 10px -3px ${props.shadowColor || '#39a2db'}`};
  }
};`;
const AnimatedButton = (_a) => {
    var { className, children } = _a, rest = __rest(_a, ["className", "children"]);
    return react_1.default.createElement(StyledButton, Object.assign({ className: className }, rest), children);
};
exports.default = AnimatedButton;
