import React from 'react';
import PropTypes from 'prop-types';
import { createIcon } from './helper/create-icon.helper';

const PrettyRating = (props) => {
	const { rating, percentage, icons, iconsNumber } = props;
	const iconsToRender = createIcon({ rating, percentage, icons, iconsNumber });

	return iconsToRender.map((icon) => (
		<i key={Math.random()} className={`${icon}`} aria-hidden='true' />
	));
};

PrettyRating.defaultProps = {
	iconsNumber: 5,
};

PrettyRating.propTypes = {
	percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	icons: PropTypes.string.isRequired,
	iconsNumber: PropTypes.number,
};

export default PrettyRating;
