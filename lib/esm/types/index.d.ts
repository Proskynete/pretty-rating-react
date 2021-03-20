import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface AllowIconsType {
    complete: string | IconDefinition;
    half: string | IconDefinition;
    empty: string | IconDefinition;
}
export interface BaseInterface {
    rating: number | string;
    icons: AllowIconsType;
}
export interface PrettyRatingInterface extends BaseInterface {
    setColors?: string[];
    iconsNumber?: number;
}
export interface CreateIconInterface extends BaseInterface {
    iconsNumber: number;
}
export interface CustomStylesInterface {
    currentIcon: string | IconDefinition;
    icons: AllowIconsType;
    colors: string[];
    type: string;
}
export interface CreateIconResponseInterface {
    name: string | IconDefinition;
    type: string;
}
