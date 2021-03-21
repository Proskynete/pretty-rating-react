"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIcon = void 0;
var createIcon = function (_a) {
    var rating = _a.rating, icons = _a.icons, iconsNumber = _a.iconsNumber;
    var i = +rating;
    var iconsToPrint = [];
    var complete = icons.complete, half = icons.half, empty = icons.empty;
    for (i; i >= 1; i -= 1) {
        iconsToPrint.push({ name: complete, type: 'complete' });
    }
    if (i >= 0.5 && i <= 1) {
        iconsToPrint.push({ name: half, type: 'half' });
    }
    while (iconsToPrint.length < iconsNumber) {
        iconsToPrint.push({ name: empty, type: 'empty' });
    }
    return iconsToPrint;
};
exports.createIcon = createIcon;
