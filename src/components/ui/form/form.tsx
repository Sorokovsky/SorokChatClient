import type { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Field } from "./field/field";
import type { IForm } from "./form.props";
import { IField } from './field/field.props';
import cn from "clsx";
import styles from "./form.module.sass";
import { Button } from "./button/button";

export const Form: FC<IForm> = ({fields, onSubmit}) => {
    const { handleSubmit, register } = useForm();

    return (
        <form className={cn(styles.form)} onSubmit={handleSubmit(onSubmit)}>
            {
                fields.map((field: IField) => (
                    <Field
                        label={field.label}
                        input={field.input}
                        key={field.input.name}
                        register={register}
                    />
                ))
            }
            <Button type="submit">Відправити</Button>
        </form>
    );
};