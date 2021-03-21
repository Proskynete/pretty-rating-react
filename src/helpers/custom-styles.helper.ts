import * as PrettyRatingInterface from '../types';

export const customStyles = ({
	currentIcon,
	icons,
	colors,
	type,
}: PrettyRatingInterface.CustomStylesProps): any =>
	currentIcon === icons.complete && type === 'complete'
		? colors[0]
		: currentIcon === icons.half && type === 'half'
		? colors[1]
		: colors[2];
