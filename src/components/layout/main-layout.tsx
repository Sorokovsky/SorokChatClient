'use client'
import { FC, memo, useEffect } from "react";
import { ILayout } from "./lauout.interface";
import Header from "@/components/header/header";
import Sidebar from "../sidebar/sidebar";
import { useAppSelector, useAppDispatch } from "@/store/store";
import favicon from "@/images/favicon.ico";
import styles from "./layout.module.sass";
import cn from "classnames";
import { useActions } from "@/hooks/useActions";
import { userSettings } from "@/constants/user-settings/user-settings";
import SettingsList from "@/components/settings-list/settings-list";
import { getUserProfile } from "@/store/slices/user/async-actions";

const MainLayout: FC<ILayout> = ({children}): JSX.Element => {
    const { isShow } = useAppSelector(state => state.settings);
    const { hide } = useActions();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUserProfile())
    },
    [dispatch]);
    return (
    <html lang="uk">
        <link rel="icon" type="image/x-icon" href={favicon.src}></link>
        <body className={cn(styles.body)}>
            <Header className={cn(styles.header)} />
            <main className={cn(styles.main)}>
                {children}
                <Sidebar close={hide} isOpen={isShow} >
                <SettingsList settings={userSettings} />
                </Sidebar>
            </main>
        </body>
    </html>
  );
};

export default memo(MainLayout);