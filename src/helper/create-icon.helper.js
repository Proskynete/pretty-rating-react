export const createIcon = ({ rating, icons, iconsNumber }) => {
	let i = rating;

	const iconsToPrint = [];
	const { complete, half, empty } = icons;

	for (i; i >= 1; i -= 1) {
		iconsToPrint.push({ name: complete, type: 'complete' });
	}

	if (i >= 0.5 && i <= 1) {
		iconsToPrint.push({ name: half, type: 'half' });
	}

	while (iconsToPrint.length < iconsNumber) {
		iconsToPrint.push({ name: empty, type: 'empty' });
	}

	return iconsToPrint;
};
