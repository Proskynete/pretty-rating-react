import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import PrettyRating from '../../src/main';

Enzyme.configure({ adapter: new Adapter() });

describe('<PrettyRating />', () => {
	it('should render component', () => {
		const rating = 4.5;
		const icons = {
			complete: 'fas fa-star',
			half: 'fas fa-star-half-alt',
			empty: 'far fa-star',
		};

		const component = renderer.create(
			<PrettyRating rating={rating} icons={icons} />,
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
