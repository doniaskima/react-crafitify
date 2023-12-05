"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_lottie_player_1 = require("@lottiefiles/react-lottie-player");
const GameLoader_json_1 = __importDefault(require("./GameLoader.json"));
exports.default = ({ style }) => {
    return (react_1.default.createElement(react_lottie_player_1.Player, { autoplay: true, loop: true, src: GameLoader_json_1.default, style: Object.assign({}, style) }));
};
