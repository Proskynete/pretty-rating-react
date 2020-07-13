import React from 'react';
import PropTypes from 'prop-types';

const PrettyRating = (props) => {
	const { rating, percentage, icons, iconsNumber } = props;

	const _percentage = rating ? (rating / 100) * 100 : percentage;
	let i = _percentage;

	const iconsToPrint = [];
	const { complete, half, empty } = icons;

	for (i; i >= 1; i -= 1) {
		iconsToPrint.push(complete);
	}
	if (i >= 0.5 && i <= 1) {
		iconsToPrint.push(half);
	}
	while (iconsToPrint.length < iconsNumber) {
		iconsToPrint.push(empty);
	}

	return iconsToPrint.map((icon) => (
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
