"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettyRating = void 0;
var react_1 = __importStar(require("react"));
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var create_icon_helper_1 = require("../helpers/create-icon.helper");
var custom_styles_helper_1 = require("../helpers/custom-styles.helper");
var config_1 = require("../config");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
var PrettyRating = function (_a) {
    var value = _a.value, _b = _a.icons, icons = _b === void 0 ? config_1.defaultValues.icons : _b, _c = _a.max, max = _c === void 0 ? config_1.defaultValues.max : _c, _d = _a.colors, colors = _d === void 0 ? config_1.defaultValues.colors : _d, _e = _a.disabled, disabled = _e === void 0 ? config_1.defaultValues.disabled : _e, onChange = _a.onChange;
    var _f = (0, react_1.useState)(), iconsToRenderState = _f[0], setIconsToRenderState = _f[1];
    (0, react_1.useEffect)(function () {
        var iconsToRender = (0, create_icon_helper_1.createIcon)({ value: value, icons: icons, max: max });
        setIconsToRenderState(iconsToRender);
    }, []);
    var handleOnMouseEnter = function (i) {
        var iconsToRender = (0, create_icon_helper_1.createIcon)({ value: i, icons: icons, max: max });
        setIconsToRenderState(iconsToRender);
    };
    var handleOnMouseLeave = function () {
        var iconsToRender = (0, create_icon_helper_1.createIcon)({ value: value, icons: icons, max: max });
        setIconsToRenderState(iconsToRender);
    };
    var handleOnChange = function (newValue) {
        onChange && onChange(newValue);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, iconsToRenderState === null || iconsToRenderState === void 0 ? void 0 : iconsToRenderState.map(function (icon, i) {
        return (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { key: i, icon: typeof icon.name === 'string' ? icon.name : icon.name, style: {
                cursor: !disabled ? 'pointer' : 'default',
                color: (0, custom_styles_helper_1.customStyles)({
                    current: icon.name,
                    icons: icons,
                    type: icon.type,
                    colors: colors,
                }),
            }, onMouseEnter: function () { return !disabled && handleOnMouseEnter(i + 1); }, onMouseLeave: function () { return !disabled && handleOnMouseLeave(); }, onClick: function () { return !disabled && handleOnChange(i + 1); } }));
    })));
};
var MemoizedPrettyRating = (0, react_1.memo)(PrettyRating);
exports.PrettyRating = MemoizedPrettyRating;
