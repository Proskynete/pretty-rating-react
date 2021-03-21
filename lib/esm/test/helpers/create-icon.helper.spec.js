import { createIcon } from '../../src/helpers/create-icon.helper';
describe('Helper', function () {
    var defaultValues = {
        iconsNumber: 5,
        icons: {
            complete: 'fas fa-star',
            half: 'fas fa-star-half-alt',
            empty: 'far fa-star',
        },
    };
    describe('createIcon', function () {
        it('should return 5 icons classes to render', function () {
            var rating = 0;
            var icons = defaultValues.icons, iconsNumber = defaultValues.iconsNumber;
            var result = createIcon({ rating: rating, icons: icons, iconsNumber: iconsNumber });
            expect(result.length).toEqual(5);
        });
        it('should return 10 icons classes to render', function () {
            var rating = 0;
            var icons = defaultValues.icons;
            var iconsNumber = 10;
            var result = createIcon({ rating: rating, icons: icons, iconsNumber: iconsNumber });
            expect(result.length).toEqual(10);
        });
        it('should return only empty icons', function () {
            var rating = 0;
            var icons = defaultValues.icons, iconsNumber = defaultValues.iconsNumber;
            var result = createIcon({ rating: rating, icons: icons, iconsNumber: iconsNumber });
            expect(result).toEqual(expect.arrayContaining([{ name: 'far fa-star', type: 'empty' }]));
            expect(result).toEqual(expect.not.arrayContaining([
                { name: 'fas fa-star', type: 'complete' },
                { name: 'fas fa-star-half-alt', type: 'half' },
            ]));
        });
        it('should return only empty and half icons', function () {
            var rating = 0.5;
            var icons = defaultValues.icons, iconsNumber = defaultValues.iconsNumber;
            var result = createIcon({ rating: rating, icons: icons, iconsNumber: iconsNumber });
            expect(result).toEqual(expect.arrayContaining([
                { name: 'fas fa-star-half-alt', type: 'half' },
                { name: 'far fa-star', type: 'empty' },
            ]));
            expect(result).toEqual(expect.not.arrayContaining([{ name: 'fas fa-star', type: 'complete' }]));
        });
        it('should return complete, half and empty icons', function () {
            var rating = 1.5;
            var icons = defaultValues.icons, iconsNumber = defaultValues.iconsNumber;
            var result = createIcon({ rating: rating, icons: icons, iconsNumber: iconsNumber });
            expect(result).toEqual(expect.arrayContaining([
                { name: 'fas fa-star', type: 'complete' },
                { name: 'fas fa-star-half-alt', type: 'half' },
                { name: 'far fa-star', type: 'empty' },
            ]));
        });
        it('should return only complete icons', function () {
            var rating = 5;
            var icons = defaultValues.icons, iconsNumber = defaultValues.iconsNumber;
            var result = createIcon({ rating: rating, icons: icons, iconsNumber: iconsNumber });
            expect(result).toEqual(expect.arrayContaining([{ name: 'fas fa-star', type: 'complete' }]));
            expect(result).toEqual(expect.not.arrayContaining([
                { name: 'fas fa-star-half-alt', type: 'half' },
                { name: 'far fa-star', type: 'empty' },
            ]));
        });
    });
});
