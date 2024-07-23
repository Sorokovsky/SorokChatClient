'use client'
import Form from "@/ui/form/form";
import { NextPage } from "next";
import { memo } from "react";
import cn from "classnames";
import styles from "./login.module.sass";
import { FieldValues } from "react-hook-form";
import { TLoginDto } from "@/types/login.type";
import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { registrationsFields } from "@/constants/forms/registration";

const LoginPage: NextPage = (): JSX.Element => {
    const { loginUser } = useActions();
    const { push } = useRouter();
    const { isLoading } = useAppSelector(state => state.user);
    const onSubmit = (data: FieldValues) => {
        const loginDto: TLoginDto = data as TLoginDto;
        loginUser(loginDto);
        push('/');
    }
    return (
        <section className={cn(styles.page)}>
            <div>
                <Form 
                    onSubmit={onSubmit} 
                    title="Авторизація" 
                    isLoading={isLoading}
                    fields={registrationsFields}
                    submitText="Авторизуватися"
                />
            </div>
        </ section>
    );
};

export default memo(LoginPage);