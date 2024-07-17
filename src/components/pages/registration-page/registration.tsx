'use client'
import Form from "@/ui/form/form";
import { NextPage } from "next";
import { memo } from "react";
import cn from "classnames";
import styles from "./registration.module.sass";
import Input from "@/ui/form/input/input";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const RegistrationPage: NextPage = (): JSX.Element => {
    return (
        <section className={cn(styles.page)}>
            <div>
                <Form onSubmit={() => {}} title="Реєстрація" >
                    <Input placeholder="Email" Icon={MdOutlineMail} />
                    <Input placeholder="Password" Icon={RiLockPasswordFill} />
                </Form>
            </div>
        </section>
    );
};

export default memo(RegistrationPage);