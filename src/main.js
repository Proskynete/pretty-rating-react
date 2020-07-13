import React from 'react';
import PropTypes from 'prop-types';
import { createIcon } from './helper/create-icon.helper';

const PrettyRating = (props) => {
	const { rating, icons, iconsNumber } = props;
	const iconsToRender = createIcon({ rating, icons, iconsNumber });

	return iconsToRender.map((icon) => (
		<i key={Math.random()} className={`${icon}`} aria-hidden='true' />
	));
};

PrettyRating.defaultProps = {
	iconsNumber: 5,
};

PrettyRating.propTypes = {
	rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	icons: PropTypes.string.isRequired,
	iconsNumber: PropTypes.number,
};

export default PrettyRating;
