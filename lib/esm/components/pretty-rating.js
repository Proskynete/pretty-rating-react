import React from 'react';
import PropTypes from 'prop-types';
import { createIcon } from '../helper/create-icon.helper';
import { customStyles } from '../helper/custom-styles.helper';
var PrettyRating = function (props) {
    var rating = props.rating, icons = props.icons, iconsNumber = props.iconsNumber, setColors = props.setColors;
    var iconsToRender = createIcon({ rating: rating, icons: icons, iconsNumber: iconsNumber });
    return iconsToRender.map(function (icon) {
        return (React.createElement("i", { key: Math.random(), style: {
                color: customStyles({
                    currentIcon: icon.name,
                    icons: icons,
                    type: icon.type,
                    colors: setColors,
                }),
            }, className: icon.name, "aria-hidden": 'true' }));
    });
};
PrettyRating.defaultProps = {
    iconsNumber: 5,
    setColors: ['#000', '#000', '#000'],
};
PrettyRating.propTypes = {
    rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    icons: PropTypes.shape({ complete: '', half: '', empty: '' }).isRequired,
    setColors: PropTypes.instanceOf(Array),
    iconsNumber: PropTypes.number,
};
export default PrettyRating;
