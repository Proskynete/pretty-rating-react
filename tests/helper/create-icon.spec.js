import { createIcon } from '../../src/helper/create-icon.helper';

describe('Helper', () => {
	const defaultValues = {
		iconsNumber: 5,
		icons: {
			complete: 'fas fa-star',
			half: 'fas fa-star-half-alt',
			empty: 'far fa-star',
		},
	};

	describe('createIcon', () => {
		it('should return 5 icons classes to render', () => {
			const rating = 0.0;
			const { icons, iconsNumber } = defaultValues;

			const result = createIcon({ rating, icons, iconsNumber });
			expect(result.length).toEqual(5);
		});

		it('should return 10 icons classes to render', () => {
			const rating = 0.0;
			const { icons } = defaultValues;
			const iconsNumber = 10;

			const result = createIcon({ rating, icons, iconsNumber });
			expect(result.length).toEqual(10);
		});

		it('should return only empty icons', () => {
			const rating = 0.0;
			const { icons, iconsNumber } = defaultValues;

			const result = createIcon({ rating, icons, iconsNumber });
			expect(result).toEqual(expect.arrayContaining(['far fa-star']));
			expect(result).toEqual(
				expect.not.arrayContaining(['fas fa-star', 'fas fa-star-half-alt']),
			);
		});

		it('should return only empty and half icons', () => {
			const rating = 0.5;
			const { icons, iconsNumber } = defaultValues;

			const result = createIcon({ rating, icons, iconsNumber });
			expect(result).toEqual(
				expect.arrayContaining(['fas fa-star-half-alt', 'far fa-star']),
			);
			expect(result).toEqual(expect.not.arrayContaining(['fas fa-star']));
		});

		it('should return complete, half and empty icons', () => {
			const rating = 1.5;
			const { icons, iconsNumber } = defaultValues;

			const result = createIcon({ rating, icons, iconsNumber });
			expect(result).toEqual(expect.arrayContaining(['fas fa-star']));
		});

		it('should return only complete icons', () => {
			const rating = 5.0;
			const { icons, iconsNumber } = defaultValues;

			const result = createIcon({ rating, icons, iconsNumber });
			expect(result).toEqual(expect.arrayContaining(['fas fa-star']));
			expect(result).toEqual(
				expect.not.arrayContaining(['fas fa-star-half-alt', 'far fa-star']),
			);
		});
	});
});
