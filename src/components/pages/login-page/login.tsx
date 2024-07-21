'use client'
import Form from "@/ui/form/form";
import { NextPage } from "next";
import { memo } from "react";
import cn from "classnames";
import styles from "./login.module.sass";
import Input from "@/ui/form/input/input";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "@/ui/form/button/button";
import { FieldValues, useForm } from "react-hook-form";
import { TLoginDto } from "@/types/login.type";
import { useActions } from "@/hooks/useActions";

const LoginPage: NextPage = (): JSX.Element => {
    const { register, handleSubmit } = useForm();
    const { loginUser } = useActions();
    const onSubmit = (data: FieldValues) => {
        const loginDto: TLoginDto = data as TLoginDto;
        loginUser(loginDto);
    }
    return (
        <section className={cn(styles.page)}>
            <div>
                <Form onSubmit={handleSubmit(onSubmit)} title="Авторизація" >
                    <Input 
                    id="email" 
                    type="email" 
                    placeholder="Email" 
                    Icon={MdOutlineMail}
                    {...register('email', {required: true})}
                     />
                    <Input 
                    id="password" type='password' 
                    placeholder="Пароль" 
                    Icon={RiLockPasswordLine} 
                    {...register('password', {required: true})}
                    />
                    <Button type="submit">Авторизуватися</Button>
                </Form>
            </div>
        </ section>
    );
};

export default memo(LoginPage);