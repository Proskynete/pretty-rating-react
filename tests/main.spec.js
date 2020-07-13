import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PrettyRating from '../src/main';

Enzyme.configure({ adapter: new Adapter() });

describe('<PrettyRating />', () => {
	let rating;
	const icons = {};

	beforeEach(() => {
		icons.complete = 'fas fa-star';
		icons.half = 'fas fa-star-half-alt';
		icons.empty = 'far fa-star';
	});

	it('should render with default props', () => {
		rating = 4.0;
		const wrapper = shallow(<PrettyRating rating={rating} icons={icons} />);

		expect(wrapper.find('i')).toEqual(
			expect.not.arrayContaining(['fas fa-star', 'far fa-star']),
		);
	});
});
