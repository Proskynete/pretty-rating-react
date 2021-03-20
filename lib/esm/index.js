import React from 'react';
import { createIcon } from './helper/create-icon.helper';
import { customStyles } from './helper/custom-styles.helper';
var defaultColors = ['#000', '#000', '#000'];
var PrettyRating = function (_a) {
    var rating = _a.rating, icons = _a.icons, _b = _a.iconsNumber, iconsNumber = _b === void 0 ? 5 : _b, _c = _a.setColors, setColors = _c === void 0 ? defaultColors : _c;
    var iconsToRender = createIcon({ rating: rating, icons: icons, iconsNumber: iconsNumber });
    return (React.createElement(React.Fragment, null, iconsToRender.map(function (icon, i) {
        return (React.createElement("i", { key: i, style: {
                color: customStyles({
                    currentIcon: icon.name,
                    icons: icons,
                    type: icon.type,
                    colors: setColors,
                }),
            }, className: icon.name, "aria-hidden": 'true' }));
    })));
};
export default PrettyRating;
