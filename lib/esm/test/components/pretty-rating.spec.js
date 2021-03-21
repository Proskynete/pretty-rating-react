import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { PrettyRating } from '../../src/components/pretty-rating';
Enzyme.configure({ adapter: new Adapter() });
describe('<PrettyRating />', function () {
    var rating;
    var icons;
    beforeEach(function () {
        rating = 3.5;
        icons = {
            complete: faStar,
            half: faStarHalfAlt,
            empty: 'star',
        };
    });
    it('Should create Snapshot', function () {
        var component = renderer.create(React.createElement(PrettyRating, { rating: rating, icons: icons }));
        var snapshot = component.toJSON();
        expect(snapshot).toMatchSnapshot();
    });
});
