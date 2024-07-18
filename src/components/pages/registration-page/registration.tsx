'use client'
import Form from "@/ui/form/form";
import { NextPage } from "next";
import { memo } from "react";
import cn from "classnames";
import styles from "./registration.module.sass";
import Input from "@/ui/form/input/input";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "@/ui/form/button/button";
import { useForm, FieldValues } from "react-hook-form";

const RegistrationPage: NextPage = (): JSX.Element => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: FieldValues) => {
        
    }
    return (
        <section className={cn(styles.page)}>
            <div>
                <Form onSubmit={handleSubmit(onSubmit)} title="Реєстрація" >
                    <Input 
                    id="email" 
                    type="email" 
                    placeholder="Email" 
                    Icon={MdOutlineMail} 
                    {...register("email", {
                        required: true,
                    })}
                    />
                    <Input 
                    id="password" 
                    type='password'
                    placeholder="Пароль" 
                    Icon={RiLockPasswordLine} 
                    {...register("password", {
                        required: true,
                    })}
                    />
                    <Button type="submit">Зареєструватися</Button>
                </Form>
            </div>
        </section>
    );
};

export default memo(RegistrationPage);