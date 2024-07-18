'use client'
import { FC, forwardRef, memo, useRef, useState } from "react";
import { IInput } from "./input.interface";
import cn from "classnames";
import styles from "./input.module.sass";

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
    ({type = 'text', className = "", placeholder = "", Icon, id, ...rest}, ref): JSX.Element => {    
    const [isFocused, setIsFocused] = useState(false)
    return (
        <label
        className={cn(styles.label, {
            [styles.focus]: isFocused
        })}
        htmlFor={id}>
            {Icon && <Icon />}
            <input
                ref={ref}
                type={type}
                id={id}
                className={cn(styles.input, className)}
                placeholder={placeholder}
                {...rest}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
            />
        </label>
    );
});

export default memo(Input);