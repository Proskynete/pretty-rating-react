export const customStyles = ({ currentIcon, icons, colors, type }) =>
	currentIcon === icons.complete && type === 'complete'
		? colors[0]
		: currentIcon === icons.half && type === 'half'
		? colors[1]
		: colors[2];
