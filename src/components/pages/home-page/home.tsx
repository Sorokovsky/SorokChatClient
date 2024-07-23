'use client'
import { NextPage } from "next";
import styles from './index.module.sass';
import Search from "@/ui/search/search"
import cn from "classnames";
import { ChangeEvent, useCallback, useEffect } from "react";
import { useAppSelector } from "@/store/store"
import { useRouter } from "next/navigation";

const HomePage: NextPage = (): JSX.Element => {
    const searchHandler = useCallback((ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        }, 
        []
    );

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
                    <div className={cn(styles.left)}>
                        <Search 
                        searchHandler={searchHandler}
                        placeholder={"Search"} 
                        />
                    </div>
                    <div className={cn(styles.right)}>
                        <div>Hello Page</div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default HomePage;