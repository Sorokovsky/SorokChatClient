import { FC, memo } from "react";
import { IForm } from "./form.interface";
import cn from 'classnames';
import styles from './form.module.sass';
import Button from "@/ui/form/button/button";
import { useForm } from "react-hook-form";
import Input from "@/ui/form/input/input";
import FileInput from "@/ui/form/file-input/file-input";

const Form: FC<IForm> = ({
    children, 
    className = "", 
    title, 
    onSubmit,
    fields,
    isLoading,
    submitText
}): JSX.Element => {
    const { handleSubmit, register } = useForm();
    return (
        <div className={cn(styles.wrapper)}>
            {title && <h3 className={cn(styles.title)}>{title}</h3>}
            <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn(styles.form, className)}
            >
                {fields.map(({placeholder, slug, type, Icon, defaultValue, registerOption}) => {
    
                    return (
                        <Input
                            id={slug}
                            type={type}
                            Icon={Icon}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            key={slug}
                            {...register(slug, registerOption)}
                        />
                    );
                })}
                {children}
                <Button disabled={isLoading}>{submitText}</Button>
            </form>
        </div>
    );
};

export default memo(Form);