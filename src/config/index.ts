import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { AllowIconsType } from '../types';

interface DefaultValuesInterface {
	icons: AllowIconsType;
	max: number;
	colors: string[];
}

export const defaultValues: DefaultValuesInterface = {
	icons: {
		complete: faStar,
		half: faStarHalfAlt,
		empty: faStar,
	},
	max: 5,
	colors: ['#000', '#000', '#000'],
};
