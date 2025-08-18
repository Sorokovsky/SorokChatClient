import type { RegisterOptions } from "react-hook-form";

export interface IInput {
    name: string;
    options: RegisterOptions,
    type: HTMLInputElement['type'];
};