'use client'
import Form from "@/ui/form/form";
import { NextPage } from "next";
import { memo } from "react";
import cn from "classnames";
import styles from "./registration.module.sass";
import { FieldValues } from "react-hook-form";
import { TRegistrationDto } from "@/types/registration.type";
import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { registrationsFields } from "@/constants/forms/registration";

const RegistrationPage: NextPage = (): JSX.Element => {
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
                <Form 
                    onSubmit={onSubmit} 
                    title="Реєстрація" 
                    fields={registrationsFields}
                    isLoading={isLoading}
                    submitText="Зареєструватися"
                    />
            </div>
        </section>
    );
};

export default memo(RegistrationPage);