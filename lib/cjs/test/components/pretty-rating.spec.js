"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = __importDefault(require("enzyme"));
var enzyme_adapter_react_17_1 = __importDefault(require("@wojtekmaj/enzyme-adapter-react-17"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var pretty_rating_1 = require("../../src/components/pretty-rating");
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_17_1.default() });
describe('<PrettyRating />', function () {
    var rating;
    var icons;
    beforeEach(function () {
        rating = 3.5;
        icons = {
            complete: free_solid_svg_icons_1.faStar,
            half: free_solid_svg_icons_1.faStarHalfAlt,
            empty: 'star',
        };
    });
    it('Should create Snapshot', function () {
        var component = react_test_renderer_1.default.create(react_1.default.createElement(pretty_rating_1.PrettyRating, { rating: rating, icons: icons }));
        var snapshot = component.toJSON();
        expect(snapshot).toMatchSnapshot();
    });
});
