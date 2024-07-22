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
import { TRegistrationDto } from "@/types/registration.type";
import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";

const RegistrationPage: NextPage = (): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useActions();
    const { error, isLoading } = useAppSelector(state => state.user);
    const { push } = useRouter();
    const onSubmit = (data: FieldValues) => {
        const dataSend: TRegistrationDto = data as TRegistrationDto;
        registerUser(dataSend);
        if(error === null) push('/user');
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
                    <Button disabled={isLoading} type="submit">Зареєструватися</Button>
                </Form>
            </div>
        </section>
    );
};

export default memo(RegistrationPage);