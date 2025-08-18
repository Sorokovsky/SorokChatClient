'use client'
import { Form } from "@/components/ui/form/form";
import { REGISTER_FIELDS } from "@/constants/form/register/fields";
import { useRegister } from "@/hooks/register.hook";
import type { NextPage } from "next";
import styles from "./register.module.sass";
import cn from "clsx";

export const RegisterPage: NextPage = () => {
    const { mutate: register } = useRegister();
    return (
        <>
            <div className={cn(styles.center)}>
                <Form fields={REGISTER_FIELDS} onSubmit={() => {}} />
            </div>
        </>
    );
};