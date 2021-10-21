"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettyRating = void 0;
var react_1 = __importDefault(require("react"));
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var create_icon_helper_1 = require("../helpers/create-icon.helper");
var custom_styles_helper_1 = require("../helpers/custom-styles.helper");
var config_1 = require("../config");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
var PrettyRating = function (_a) {
    var value = _a.value, _b = _a.icons, icons = _b === void 0 ? config_1.defaultValues.icons : _b, _c = _a.max, max = _c === void 0 ? config_1.defaultValues.max : _c, _d = _a.colors, colors = _d === void 0 ? config_1.defaultValues.colors : _d;
    var iconsToRender = (0, create_icon_helper_1.createIcon)({ value: value, icons: icons, max: max });
    return (react_1.default.createElement("div", null, iconsToRender.map(function (icon, i) {
        return (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { key: i, icon: typeof icon.name === 'string'
                ? icon.name
                : icon.name, style: {
                color: (0, custom_styles_helper_1.customStyles)({
                    current: icon.name,
                    icons: icons,
                    type: icon.type,
                    colors: colors,
                }),
            } }));
    })));
};
exports.PrettyRating = PrettyRating;
