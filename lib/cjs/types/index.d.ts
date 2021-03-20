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
export interface Props extends BaseInterface {
    setColors?: string[];
    iconsNumber?: number;
}
export interface CreateIconProps extends BaseInterface {
    iconsNumber: number;
}
export interface CustomStylesProps {
    currentIcon: string | IconDefinition;
    icons: AllowIconsType;
    colors: string[];
    type: string;
}
export interface CreateIconResponse {
    name: string | IconDefinition;
    type: string;
}
