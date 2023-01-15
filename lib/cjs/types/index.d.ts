import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
type AllowIcons = 'complete' | 'half' | 'empty';
export interface AllowIconsType {
    complete: string | IconDefinition;
    half: string | IconDefinition;
    empty: string | IconDefinition;
}
export interface PrettyRatingProps {
    value: number;
    icons?: AllowIconsType;
    max?: number;
    colors?: string[];
    onChange?: (value: number) => void;
    disabled?: boolean;
}
export interface CreateIconProps {
    value: number;
    icons: AllowIconsType;
    max: number;
}
export interface CreateIconResponse {
    name: string | IconDefinition;
    type: AllowIcons;
}
export interface CustomStylesProps {
    current: string | IconDefinition;
    icons: AllowIconsType;
    colors: string[];
    type: AllowIcons;
}
export {};
