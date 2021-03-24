"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customStyles = void 0;
var customStyles = function (_a) {
    var current = _a.current, icons = _a.icons, colors = _a.colors, type = _a.type;
    return current === icons.complete && type === 'complete'
        ? colors[0]
        : current === icons.half && type === 'half'
            ? colors[1]
            : colors[2];
};
exports.customStyles = customStyles;
