import type { FieldValues, SubmitHandler } from "react-hook-form";
import type { IField } from "./field/field.props";

export interface IForm {
    fields: IField[],
    onSubmit: SubmitHandler<FieldValues>
};