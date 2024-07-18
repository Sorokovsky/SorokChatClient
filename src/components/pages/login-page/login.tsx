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

const LoginPage: NextPage = (): JSX.Element => {
    return (
        <section className={cn(styles.page)}>
            <div>
                <Form onSubmit={() => {}} title="Авторизація" >
                    <Input id="email" type="email" placeholder="Email" Icon={MdOutlineMail} />
                    <Input id="password" type='password' placeholder="Пароль" Icon={RiLockPasswordLine} />
                    <Button>Авторизуватися</Button>
                </Form>
            </div>
        </ section>
    );
};

export default memo(LoginPage);