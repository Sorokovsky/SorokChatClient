'use client'
import { FC, memo } from "react";
import { ILayout } from "./lauout.interface";
import Header from "@/components/header/header";
import Sidebar from "../sidebar/sidebar";
import { useAppSelector } from "@/store/store";

const MainLayout: FC<ILayout> = ({children}): JSX.Element => {
    const { isShow } = useAppSelector(state => state.settings);
    return (
    <html lang="uk">
        <body>
            <Header />
            <main>
                {children}
                <Sidebar isOpen={isShow} />
            </main>
        </body>
    </html>
  );
};

export default memo(MainLayout);