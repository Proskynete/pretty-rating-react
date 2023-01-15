import React, { memo, useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createIcon } from '../helpers/create-icon.helper';
import { customStyles } from '../helpers/custom-styles.helper';
import { defaultValues } from '../config';
library.add(fas);
var PrettyRating = function (_a) {
    var value = _a.value, _b = _a.icons, icons = _b === void 0 ? defaultValues.icons : _b, _c = _a.max, max = _c === void 0 ? defaultValues.max : _c, _d = _a.colors, colors = _d === void 0 ? defaultValues.colors : _d, _e = _a.disabled, disabled = _e === void 0 ? defaultValues.disabled : _e, onChange = _a.onChange;
    var _f = useState(), iconsToRenderState = _f[0], setIconsToRenderState = _f[1];
    useEffect(function () {
        var iconsToRender = createIcon({ value: value, icons: icons, max: max });
        setIconsToRenderState(iconsToRender);
    }, []);
    var handleOnMouseEnter = function (i) {
        var iconsToRender = createIcon({ value: i, icons: icons, max: max });
        setIconsToRenderState(iconsToRender);
    };
    var handleOnMouseLeave = function () {
        var iconsToRender = createIcon({ value: value, icons: icons, max: max });
        setIconsToRenderState(iconsToRender);
    };
    var handleOnChange = function (newValue) {
        onChange && onChange(newValue);
    };
    return (React.createElement(React.Fragment, null, iconsToRenderState === null || iconsToRenderState === void 0 ? void 0 : iconsToRenderState.map(function (icon, i) {
        return (React.createElement(FontAwesomeIcon, { key: i, icon: typeof icon.name === 'string' ? icon.name : icon.name, style: {
                cursor: !disabled ? 'pointer' : 'default',
                color: customStyles({
                    current: icon.name,
                    icons: icons,
                    type: icon.type,
                    colors: colors,
                }),
            }, onMouseEnter: function () { return !disabled && handleOnMouseEnter(i + 1); }, onMouseLeave: function () { return !disabled && handleOnMouseLeave(); }, onClick: function () { return !disabled && handleOnChange(i + 1); } }));
    })));
};
var MemoizedPrettyRating = memo(PrettyRating);
export { MemoizedPrettyRating as PrettyRating };
