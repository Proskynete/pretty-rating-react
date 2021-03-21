export var customStyles = function (_a) {
    var currentIcon = _a.currentIcon, icons = _a.icons, colors = _a.colors, type = _a.type;
    return currentIcon === icons.complete && type === 'complete'
        ? colors[0]
        : currentIcon === icons.half && type === 'half'
            ? colors[1]
            : colors[2];
};
