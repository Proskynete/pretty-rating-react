export const customStyles = (currentIcon, icons, colors) =>
	currentIcon === icons.complete
		? colors[0]
		: currentIcon === icons.half
		? colors[1]
		: colors[2];
