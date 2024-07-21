'use client'
import { useActions } from "@/hooks/useActions";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { memo, useEffect } from "react";
import cn from "classnames";
import styles from "./logout-page.module.sass";

const LogoutPage: NextPage = (): JSX.Element => {
    const { logoutUser } = useActions();
    const { push } = useRouter();
    useEffect(() => {
        logoutUser();
        push('/login');
    }, []);
    return (
        <section className={cn(styles.page)}>
            <div className={cn(styles.container)} >LOGOUT</div>
        </section>
    );
};

export default memo(LogoutPage);