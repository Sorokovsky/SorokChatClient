import { IField } from "@/constants/forms/form.interface";
import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";

export interface IForm {
    children?: ReactNode;
    title?: string;
    className?: string;
    onSubmit: (data: FieldValues) => void;
    fields: IField[];
    submitText: string;
    isLoading?: boolean;
};