'use client'
import { NextPage } from "next";
import styles from './index.module.sass';
import Search from "@/ui/search/search"
import cn from "classnames";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useAppSelector } from "@/store/store"
import { useRouter } from "next/navigation";
import Chat from "@/components/chat/chat";
import Sidebar from "@/components/sidebar/sidebar";

const HomePage: NextPage = (): JSX.Element => {
    const searchHandler = useCallback((ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        }, 
        []
    );

    const [isSearch, setIsSearch] = useState(false);

    const { user } = useAppSelector(state => state.user);
    const { push } = useRouter();
    useEffect(() => {
        if(user === null) {
            push("/login");
        }
    }, [user]);

    return (
        <>
            <section className={cn(styles.page)}>
                <div className={cn(styles.container)}>
                    <Chat></Chat>
                </div>
            </section>
        </>
    )
};

export default HomePage;