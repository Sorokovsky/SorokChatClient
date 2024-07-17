import { FC, memo } from "react";
import { IForm } from "./form.interface";
import cn from 'classnames';
import styles from './form.module.sass';

const Form: FC<IForm> = ({children, className = "", title}): JSX.Element => {
    return (
        <div className={cn(styles.wrapper)}>
            {title && <h3 className={cn(styles.title)}>{title}</h3>}
            <form
            className={cn(styles.form, className)}
            >
                {children}
            </form>
        </div>
    );
};

export default memo(Form);