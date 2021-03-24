import * as PrettyRatingInterface from '../types';

export const customStyles = ({
	current,
	icons,
	colors,
	type,
}: PrettyRatingInterface.CustomStylesProps): any =>
	current === icons.complete && type === 'complete'
		? colors[0]
		: current === icons.half && type === 'half'
		? colors[1]
		: colors[2];
