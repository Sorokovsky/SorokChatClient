import { FC } from "react";
import { ILayout } from "./lauout.interface";
import Header from "@/components/header/header";

const MainLayout: FC<ILayout> = ({children}): JSX.Element => {
    return (
    <html lang="uk">
        <body>
            <Header />
            <main>{children}</main>
        </body>
    </html>
  );
};

export default MainLayout;