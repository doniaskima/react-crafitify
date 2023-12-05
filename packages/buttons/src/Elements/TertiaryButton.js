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
padding: 10px 20px;
text-transform: uppercase;
cursor:pointer;
border-radius: 8px;
font-size: 17px;
font-weight: 500;
color: ${(props) => props.textColor || '#00000080'}; // Changed to black
text-shadow: none;
background: transparent;
box-shadow: transparent;
border: 1px solid ${(props) => props.borderColor || '#00000080'};
transition: 0.5s ease;
user-select: none;

&:hover,
&:focus {
  color: #ffffff;
  background: ${(props) => props.bgColor || '#008cff'};
  border: 1px solid ${(props) => props.borderColor || '#008cff'};
  text-shadow: ${(props) => `0 0 5px ${props.shadowColor || '#ffffff'},
     0 0 10px ${props.shadowColor || '#ffffff'},
     0 0 20px ${props.shadowColor || '#ffffff'}`};
  box-shadow: ${(props) => `0 0 5px ${props.shadowColor || '#008cff'},
     0 0 20px ${props.shadowColor || '#008cff'},
     0 0 50px ${props.shadowColor || '#008cff'},
     0 0 100px ${props.shadowColor || '#008cff'}`};
}
`;
const TertiaryButton = (_a) => {
    var { children, className } = _a, rest = __rest(_a, ["children", "className"]);
    return react_1.default.createElement(StyledButton, Object.assign({ className: className }, rest), children);
};
exports.default = TertiaryButton;
