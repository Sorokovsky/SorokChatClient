import { InputHTMLAttributes } from "react";

export interface IFileInput extends InputHTMLAttributes<HTMLInputElement>{
    image: string;
    size: number;
}