import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { AllowIconsType } from '../types';

interface DefaultValuesInterface {
	icons: AllowIconsType;
	max: number | string;
	colors: string[];
}

export const defaultValues: DefaultValuesInterface = {
	icons: {
		complete: faStar,
		half: faStarHalfAlt,
		empty: 'star',
	},
	max: 5,
	colors: ['#000', '#000', '#000'],
};
