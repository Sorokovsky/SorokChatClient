import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    className?: string;
    Icon?: IconType;
    id: string;
};