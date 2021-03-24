import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createIcon } from '../helpers/create-icon.helper';
import { customStyles } from '../helpers/custom-styles.helper';
import { defaultValues } from '../config';
library.add(fas);
export var PrettyRating = function (_a) {
    var value = _a.value, _b = _a.icons, icons = _b === void 0 ? defaultValues.icons : _b, _c = _a.max, max = _c === void 0 ? defaultValues.max : _c, _d = _a.colors, colors = _d === void 0 ? defaultValues.colors : _d;
    var iconsToRender = createIcon({ value: value, icons: icons, max: max });
    return (React.createElement("div", null, iconsToRender.map(function (icon, i) {
        return (React.createElement(FontAwesomeIcon, { key: i, icon: typeof icon.name === 'string'
                ? icon.name
                : icon.name, style: {
                color: customStyles({
                    current: icon.name,
                    icons: icons,
                    type: icon.type,
                    colors: colors,
                }),
            } }));
    })));
};
