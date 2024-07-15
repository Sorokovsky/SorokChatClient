import { IconType } from "react-icons";
export interface IAvatar {
    Icon?: IconType,
    image?: string,
    size: number,
    clickHandler?: () => void
};