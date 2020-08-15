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
		it('should return comlete color', () => {
			const currentIcon = 'fas fa-star';
			const { icons, colors } = defaultValues;

			const result = customStyles({ currentIcon, icons, colors });
			expect(result).toEqual('completeColor');
		});

		it('should return half color', () => {
			const currentIcon = 'fas fa-star-half-alt';
			const { icons, colors } = defaultValues;

			const result = customStyles({ currentIcon, icons, colors });
			expect(result).toEqual('halfColor');
		});

		it('should return empty color', () => {
			const currentIcon = 'far fa-star';
			const { icons, colors } = defaultValues;

			const result = customStyles({ currentIcon, icons, colors });
			expect(result).toEqual('emptyColor');
		});
	});
});
