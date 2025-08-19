'use client'
import { Form } from "@/components/ui/form/form";
import { REGISTER_FIELDS } from "@/constants/form/register/fields";
import { useRegister } from "@/hooks/register.hook";
import type { NextPage } from "next";
import styles from "./register.module.sass";
import cn from "clsx";
import { useCallback } from "react";
import type { CreateUserPayload } from "@/contracts/user/create-user.contract";

export const RegisterPage: NextPage = () => {
    const { mutate: register } = useRegister();
    const onSubmit = useCallback((fields: unknown) => {
        const createdUser = fields as CreateUserPayload;
        register(createdUser);
    }, []);
    return (
        <>
            <div className={cn(styles.center)}>
                <Form fields={REGISTER_FIELDS} onSubmit={onSubmit} />
            </div>
        </>
    );
};