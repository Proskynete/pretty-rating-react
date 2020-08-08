import React from 'react';
import PropTypes from 'prop-types';
import { createIcon } from '../helper/create-icon.helper';

const PrettyRating = (props) => {
	const { rating, icons, iconsNumber, setColors } = props;
	const iconsToRender = createIcon({ rating, icons, iconsNumber });

	return iconsToRender.map((icon) => {
		return <i key={Math.random()} className={`${icon}`} aria-hidden='true' />;
	});
};

PrettyRating.defaultProps = {
	iconsNumber: 5,
	setColors: ['#000', '#000', '#000'],
};

PrettyRating.propTypes = {
	rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	icons: PropTypes.shape({ complete: '', half: '', empty: '' }).isRequired,
	setColors: PropTypes.shape([]),
	iconsNumber: PropTypes.number,
};

export default PrettyRating;
