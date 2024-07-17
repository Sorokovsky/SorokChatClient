import { FormEvent, ReactNode } from "react";

export interface IForm {
    children: ReactNode;
    title: string;
    onSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}