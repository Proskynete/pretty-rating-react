"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var custom_styles_helper_1 = require("../../src/helpers/custom-styles.helper");
describe('Helper', function () {
    var defaultValues = {
        icons: {
            complete: 'fas fa-star',
            half: 'fas fa-star-half-alt',
            empty: 'far fa-star',
        },
        colors: ['completeColor', 'halfColor', 'emptyColor'],
    };
    describe('customColors', function () {
        it('should return complete color', function () {
            var currentIcon = 'fas fa-star';
            var type = 'complete';
            var icons = defaultValues.icons, colors = defaultValues.colors;
            var result = custom_styles_helper_1.customStyles({ currentIcon: currentIcon, icons: icons, colors: colors, type: type });
            expect(result).toEqual('completeColor');
        });
        it('should return half color', function () {
            var currentIcon = 'fas fa-star-half-alt';
            var type = 'half';
            var icons = defaultValues.icons, colors = defaultValues.colors;
            var result = custom_styles_helper_1.customStyles({ currentIcon: currentIcon, icons: icons, colors: colors, type: type });
            expect(result).toEqual('halfColor');
        });
        it('should return empty color', function () {
            var currentIcon = 'far fa-star';
            var type = 'empty';
            var icons = defaultValues.icons, colors = defaultValues.colors;
            var result = custom_styles_helper_1.customStyles({ currentIcon: currentIcon, icons: icons, colors: colors, type: type });
            expect(result).toEqual('emptyColor');
        });
    });
});
