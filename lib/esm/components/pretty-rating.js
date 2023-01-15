import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createIcon } from '../helpers/create-icon.helper';
import { customStyles } from '../helpers/custom-styles.helper';
import { defaultValues } from '../config';
library.add(fas);
export var PrettyRating = function (_a) {
    var value = _a.value, _b = _a.icons, icons = _b === void 0 ? defaultValues.icons : _b, _c = _a.max, max = _c === void 0 ? defaultValues.max : _c, _d = _a.colors, colors = _d === void 0 ? defaultValues.colors : _d;
    var _e = useState(value), _value = _e[0], setValue = _e[1];
    var _f = useState(), iconsToRenderState = _f[0], setIconsToRenderState = _f[1];
    useEffect(function () {
        var iconsToRender = createIcon({ value: _value, icons: icons, max: max });
        setIconsToRenderState(iconsToRender);
    }, [_value]);
    return (React.createElement(React.Fragment, null, iconsToRenderState === null || iconsToRenderState === void 0 ? void 0 : iconsToRenderState.map(function (icon, i) {
        return (React.createElement(FontAwesomeIcon, { key: i, icon: typeof icon.name === 'string' ? icon.name : icon.name, onMouseEnter: function () {
                var iconsToRender = createIcon({ value: i + 1, icons: icons, max: max });
                setIconsToRenderState(iconsToRender);
            }, onMouseLeave: function () {
                var iconsToRender = createIcon({ value: _value, icons: icons, max: max });
                setIconsToRenderState(iconsToRender);
            }, onClick: function () {
                setValue(i + 1);
            }, style: {
                cursor: 'pointer',
                color: customStyles({
                    current: icon.name,
                    icons: icons,
                    type: icon.type,
                    colors: colors,
                }),
            } }));
    })));
};
