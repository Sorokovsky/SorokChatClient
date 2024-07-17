'use client'
import { FC, memo, useRef, useState } from "react";
import { IInput } from "./input.interface";
import cn from "classnames";
import styles from "./input.module.sass";

const Input: FC<IInput> = ({type = 'text', className = "", placeholder = "", Icon}): JSX.Element => {    
    const [isFocused, setIsFocused] = useState(false)
    return (
        <label
        className={cn(styles.label, {
            [styles.focus]: isFocused
        })}
        htmlFor={styles.input}>
            {Icon && <Icon />}
            <input
                type={type}
                id={styles.input}
                className={cn(styles.input, className)}
                placeholder={placeholder}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
            />
        </label>
    );
};

export default memo(Input);