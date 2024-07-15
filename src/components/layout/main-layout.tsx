import { FC } from "react";
import { ILayout } from "./lauout.interface";
import Header from "@/components/header/header";
import Sidebar from "../sidebar/sidebar";

const MainLayout: FC<ILayout> = ({children}): JSX.Element => {
    return (
    <html lang="uk">
        <body>
            <Header />
            <main>{children}</main>
            <Sidebar isOpen />
        </body>
    </html>
  );
};

export default MainLayout;