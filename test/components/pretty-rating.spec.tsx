import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';

import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { AllowIconsType } from '../../src/types';
import { PrettyRating } from '../../src/components/pretty-rating';

Enzyme.configure({ adapter: new Adapter() });

describe('<PrettyRating />', () => {
	let value: number;
	let icons: AllowIconsType;

	beforeEach(() => {
		value = 3.5;
		icons = {
			complete: faStar,
			half: faStarHalfAlt,
			empty: 'star',
		};
	});

	it('Should create Snapshot', () => {
		const component = renderer.create(
			<PrettyRating value={value} icons={icons} />,
		);

		const snapshot = component.toJSON();
		expect(snapshot).toMatchSnapshot();
	});
});
