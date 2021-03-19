export interface AllowIconsType {
    complete: string;
    half: string;
    empty: string;
}
export interface BaseInterface {
    rating: number | string;
    icons: AllowIconsType;
}
export interface PrettyRatingInterface extends BaseInterface {
    setColors?: String[];
    iconsNumber?: number;
}
export interface CreateIconInterface extends BaseInterface {
    iconsNumber: number;
}
export interface CustomStylesInterface {
    currentIcon: string;
    icons: AllowIconsType;
    colors: String[];
    type: string;
}
export interface CreateIconResponseInterface {
    name: string;
    type: string;
}