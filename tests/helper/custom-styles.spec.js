import { customStyles } from '../../src/helper/custom-styles.helper';

describe('Helper', () => {
	const defaultValues = {
		icons: {
			complete: 'fas fa-star',
			half: 'fas fa-star-half-alt',
			empty: 'far fa-star',
		},
		colors: ['completeColor', 'halfColor', 'emptyColor'],
	};

	describe('customColors', () => {
		it('should return complete color', () => {
			const currentIcon = 'fas fa-star';
			const type = 'complete';
			const { icons, colors } = defaultValues;

			const result = customStyles({ currentIcon, icons, colors, type });
			expect(result).toEqual('completeColor');
		});

		it('should return half color', () => {
			const currentIcon = 'fas fa-star-half-alt';
			const type = 'half';
			const { icons, colors } = defaultValues;

			const result = customStyles({ currentIcon, icons, colors, type });
			expect(result).toEqual('halfColor');
		});

		it('should return empty color', () => {
			const currentIcon = 'far fa-star';
			const type = 'empty';
			const { icons, colors } = defaultValues;

			const result = customStyles({ currentIcon, icons, colors, type });
			expect(result).toEqual('emptyColor');
		});
	});
});
