/// <reference types="react" />
import PropTypes from 'prop-types';
declare const PrettyRating: {
    (props: any): JSX.Element[];
    defaultProps: {
        iconsNumber: number;
        setColors: string[];
    };
    propTypes: {
        rating: PropTypes.Validator<string | number>;
        icons: PropTypes.Validator<PropTypes.InferProps<PropTypes.ValidationMap<any>>>;
        setColors: PropTypes.Requireable<unknown[]>;
        iconsNumber: PropTypes.Requireable<number>;
    };
};
export default PrettyRating;
