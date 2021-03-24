import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface AllowIconsType {
    complete: string | IconDefinition;
    half: string | IconDefinition;
    empty: string | IconDefinition;
}
export interface Props {
    value: number;
    icons?: AllowIconsType;
    max?: number;
    colors?: string[];
}
export interface CreateIconProps {
    value: number;
    icons: AllowIconsType;
    max: number;
}
export interface CreateIconResponse {
    name: string | IconDefinition;
    type: string;
}
export interface CustomStylesProps {
    current: string | IconDefinition;
    icons: AllowIconsType;
    colors: string[];
    type: string;
}
