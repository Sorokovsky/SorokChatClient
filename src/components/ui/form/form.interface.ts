import { FormEvent, ReactNode } from "react";

export interface IForm {
    children: ReactNode;
    title?: string;
    className?: string;
    onSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}