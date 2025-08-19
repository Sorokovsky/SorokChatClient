"use client"
import { FC } from "react";
import type { IInput } from './input.props';
import { useForm } from "react-hook-form";
import cn from "clsx";
import styles from "./input.module.sass";

export const Input: FC<IInput> = ({name, options, register = () => {}}) => {
    return (
        <input className={cn(styles.input)} id={name} {...register(name, options)} autoComplete="off" />
    );
};