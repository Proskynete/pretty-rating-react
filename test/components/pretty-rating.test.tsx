import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PrettyRating } from '../../src/components/pretty-rating';
import { AllowIconsType } from '../../src/types';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

describe('<PrettyRating />', () => {
	test('Should create Snapshot', () => {
		const component = render(<PrettyRating value={3.5} />);
		expect(component).toMatchSnapshot();
	});

	test('Should render with default props', async () => {
		const colors: string[] = ['#fff', '#000', '#ccc'];

		const icons: AllowIconsType = {
			complete: faStar,
			half: faStarHalfAlt,
			empty: 'star',
		};

		const props = {
			value: 0.5,
			max: 3,
			colors,
			icons,
			disabled: false,
			onChange: (num: number) => {
				console.log(num);
			},
		};

		const { container } = render(<PrettyRating {...props} />);

		const rating = container.querySelectorAll('svg')[0];

		expect(rating).toBeInTheDocument();

		fireEvent.mouseEnter(rating);
		fireEvent.click(rating);
		fireEvent.mouseLeave(rating);
	});

	test("should render with 'disabled' prop", async () => {
		const colors: string[] = ['#fff', '#000', '#ccc'];

		const icons: AllowIconsType = {
			complete: faStar,
			half: faStarHalfAlt,
			empty: 'star',
		};

		const props = {
			value: 0.5,
			max: 3,
			colors,
			icons,
			disabled: true,
			onChange: (num: number) => {
				console.log(num);
			},
		};

		const { container } = render(<PrettyRating {...props} />);

		const rating = container.querySelectorAll('svg')[0];

		expect(rating).toBeInTheDocument();

		fireEvent.mouseEnter(rating);
		fireEvent.click(rating);
		fireEvent.mouseLeave(rating);
	});
});
