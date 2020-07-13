export const createIcon = ({ rating, percentage, icons, iconsNumber }) => {
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

	return iconsToPrint;
};
