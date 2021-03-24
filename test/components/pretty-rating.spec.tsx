import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import { PrettyRating } from '../../src/components/pretty-rating';
import { AllowIconsType } from '../../src/types';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

Enzyme.configure({ adapter: new Adapter() });

describe('<PrettyRating />', () => {
	it('Should create Snapshot', () => {
		const component = renderer.create(<PrettyRating value={3.5} />);

		const snapshot = component.toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('Should render with default props', () => {
		const value: number = 0.5;
		const max: number = 3;
		const colors: string[] = ['#fff', '#000', '#ccc'];
		const icons: AllowIconsType = {
			complete: faStar,
			half: faStarHalfAlt,
			empty: 'star',
		};

		const components = shallow(
			<PrettyRating value={value} max={max} colors={colors} icons={icons} />,
		);

		expect(components.find('div').text()).toEqual(
			'<FontAwesomeIcon /><FontAwesomeIcon /><FontAwesomeIcon />',
		);
	});
});
