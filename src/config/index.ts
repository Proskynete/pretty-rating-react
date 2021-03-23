import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { AllowIconsType } from '../types';

interface defaultValuesInterface {
	icons: AllowIconsType;
	max: number | string;
	colors: string[];
}

export const defaultValues: defaultValuesInterface = {
	icons: {
		complete: faStar,
		half: faStarHalfAlt,
		empty: faStar,
	},
	max: 5,
	colors: ['#000', '#000', '#000'],
};
