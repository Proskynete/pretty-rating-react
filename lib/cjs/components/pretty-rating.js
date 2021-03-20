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
var create_icon_helper_1 = require("../helper/create-icon.helper");
var custom_styles_helper_1 = require("../helper/custom-styles.helper");
var defaultColors = ['#000', '#000', '#000'];
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
var PrettyRating = function (_a) {
    var rating = _a.rating, icons = _a.icons, _b = _a.iconsNumber, iconsNumber = _b === void 0 ? 5 : _b, _c = _a.setColors, setColors = _c === void 0 ? defaultColors : _c;
    var iconsToRender = create_icon_helper_1.createIcon({ rating: rating, icons: icons, iconsNumber: iconsNumber });
    return (react_1.default.createElement(react_1.default.Fragment, null, iconsToRender.map(function (icon, i) {
        return (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { key: i, icon: typeof icon.name === 'string'
                ? icon.name
                : icon.name, style: {
                color: custom_styles_helper_1.customStyles({
                    currentIcon: icon.name,
                    icons: icons,
                    type: icon.type,
                    colors: setColors,
                }),
            } }));
    })));
};
exports.PrettyRating = PrettyRating;
