import type { FC } from "react";
import { useForm } from "react-hook-form";
import { Field } from "./field/field";
import type { IForm } from "./form.props";
import { IField } from './field/field.props';
import cn from "clsx";
import styles from "./form.module.sass";

export const Form: FC<IForm> = ({fields, onSubmit}) => {
    const { handleSubmit } = useForm()
    return (
        <form className={cn(styles.form)} onSubmit={handleSubmit(onSubmit)}>
            {
                fields.map((field: IField) => (<Field label={field.label} input={field.input} key={field.label} />))
            }
        </form>
    );
};