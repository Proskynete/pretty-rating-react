import { createIcon } from '../../src/helpers/create-icon.helper';

describe('Helper', () => {
	const defaultValues = {
		max: 5,
		icons: {
			complete: 'fas fa-star',
			half: 'fas fa-star-half-alt',
			empty: 'far fa-star',
		},
	};

	describe('createIcon', () => {
		it('should return 5 icons classes to render', () => {
			const value = 0;
			const { icons, max } = defaultValues;

			const result = createIcon({ value, icons, max });
			expect(result.length).toEqual(5);
		});

		it('should return 10 icons classes to render', () => {
			const value = 0;
			const { icons } = defaultValues;
			const max = 10;

			const result = createIcon({ value, icons, max });
			expect(result.length).toEqual(10);
		});

		it('should return only empty icons', () => {
			const value = 0;
			const { icons, max } = defaultValues;

			const result = createIcon({ value, icons, max });
			expect(result).toEqual(expect.arrayContaining([{ name: 'far fa-star', type: 'empty' }]));
			expect(result).toEqual(
				expect.not.arrayContaining([
					{ name: 'fas fa-star', type: 'complete' },
					{ name: 'fas fa-star-half-alt', type: 'half' },
				]),
			);
		});

		it('should return only empty and half icons', () => {
			const value = 0.5;
			const { icons, max } = defaultValues;

			const result = createIcon({ value, icons, max });
			expect(result).toEqual(
				expect.arrayContaining([
					{ name: 'fas fa-star-half-alt', type: 'half' },
					{ name: 'far fa-star', type: 'empty' },
				]),
			);
			expect(result).toEqual(
				expect.not.arrayContaining([{ name: 'fas fa-star', type: 'complete' }]),
			);
		});

		it('should return complete, half and empty icons', () => {
			const value = 1.5;
			const { icons, max } = defaultValues;

			const result = createIcon({ value, icons, max });
			expect(result).toEqual(
				expect.arrayContaining([
					{ name: 'fas fa-star', type: 'complete' },
					{ name: 'fas fa-star-half-alt', type: 'half' },
					{ name: 'far fa-star', type: 'empty' },
				]),
			);
		});

		it('should return only complete icons', () => {
			const value = 5;
			const { icons, max } = defaultValues;

			const result = createIcon({ value, icons, max });
			expect(result).toEqual(expect.arrayContaining([{ name: 'fas fa-star', type: 'complete' }]));
			expect(result).toEqual(
				expect.not.arrayContaining([
					{ name: 'fas fa-star-half-alt', type: 'half' },
					{ name: 'far fa-star', type: 'empty' },
				]),
			);
		});
	});
});
