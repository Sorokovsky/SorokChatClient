import type { FC } from 'react';
import type { IField } from './field.props';
import { Input } from './input/input';
import cn from "clsx";
import styles from "./field.module.sass";

export const Field: FC<IField> = ({ input, label }) => {
    return (
        <fieldset className={cn(styles.field)}>
            <label htmlFor={input.name}>{label}{input.options.required ? <span>*</span> : undefined}</label>
            <Input type={input.type} name={input.name} options={input.options} />
        </fieldset>
    );
};