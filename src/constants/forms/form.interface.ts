import { HTMLInputTypeAttribute } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";
import { IconType } from "react-icons";
export interface IField {
    slug: string;
    placeholder: string | number | Date | undefined;
    type: HTMLInputTypeAttribute
    Icon?: IconType;
    defaultValue?: string | number | Date | undefined;
    registerOption?: RegisterOptions<FieldValues>;
    size?: number;
    image?: string
}