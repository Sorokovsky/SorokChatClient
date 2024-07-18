'use client'
import { FC, memo } from "react";
import { ILayout } from "./lauout.interface";
import Header from "@/components/header/header";
import Sidebar from "../sidebar/sidebar";
import { useAppSelector } from "@/store/store";
import favicon from "@/images/favicon.ico";
import styles from "./layout.module.sass";
import cn from "classnames";
import { useActions } from "@/hooks/useActions";

const MainLayout: FC<ILayout> = ({children}): JSX.Element => {
    const { isShow } = useAppSelector(state => state.settings);
    const { hide } = useActions();
    return (
    <html lang="uk">
        <link rel="icon" type="image/x-icon" href={favicon.src}></link>
        <body className={cn(styles.body)}>
            <Header className={cn(styles.header)} />
            <main className={cn(styles.main)}>
                {children}
                <Sidebar close={hide} isOpen={isShow} />
            </main>
        </body>
    </html>
  );
};

export default memo(MainLayout);