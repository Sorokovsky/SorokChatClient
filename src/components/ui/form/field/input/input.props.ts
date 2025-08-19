import type { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

export interface IInput {
    name: string;
    options: RegisterOptions,
    type: HTMLInputElement['type'];
    register?: (name: string, options: RegisterOptions) => UseFormRegisterReturn;
};