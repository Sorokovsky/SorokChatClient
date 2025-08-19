import type { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import type { IInput } from "./input/input.props";

export interface IField {
  input: IInput;
  label: string;
  register?: (name: string, options: RegisterOptions) => UseFormRegisterReturn;
};