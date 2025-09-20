"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("../../constants/colors");
const Loader_styles_1 = require("./Loader.styles");
const { black } = colors_1.colors;
const Loader = ({ color = black, size = 64, borderSize = 8, type = 'ring', }) => {
    const RenderLoader = {
        ring: (React.createElement(Loader_styles_1.LoaderRingContainer, { color: color, size: size, borderSize: borderSize },
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null))),
        dots: React.createElement(Loader_styles_1.LoaderDotsContainder, { color: color, size: size }),
        rotate: (React.createElement(Loader_styles_1.LoaderRotateContainer, { color: color, size: size, borderSize: borderSize })),
    };
    return RenderLoader[type];
};
exports.default = Loader;
