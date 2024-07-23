import { IInput } from "../input/input.interface";

export interface IFileInput extends IInput{
    image?: string;
    size: number;
}