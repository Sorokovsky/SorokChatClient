import { HTMLInputTypeAttribute } from "react";
import { IconType } from "react-icons";

export interface IInput {
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    className?: string;
    Icon?: IconType;
};