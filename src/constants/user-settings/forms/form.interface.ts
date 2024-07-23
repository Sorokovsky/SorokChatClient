import { HTMLInputTypeAttribute } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";
import { IconType } from "react-icons";
export interface IField {
    slug: string;
    placeholder: string;
    type: HTMLInputTypeAttribute
    Icon?: IconType;
    defaultValue?: string;
    registerOption?: RegisterOptions<FieldValues>;
};