import { CustomStylesProps } from '../types';

export const customStyles = ({ current, icons, colors, type }: CustomStylesProps): any =>
	current === icons.complete && type === 'complete'
		? colors[0]
		: current === icons.half && type === 'half'
		? colors[1]
		: colors[2];
