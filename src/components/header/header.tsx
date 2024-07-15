import { FC } from "react";
import { IHeader } from "./header.interface";
import styles from './header.module.sass';
import logo from "@/images/logo.svg"
import Logo from "@/ui/logo/logo";

const Header: FC<IHeader> = (): JSX.Element => {
    return (
        <header
        className={styles.header}
        >
            <div 
            className={["container", styles.container].join(" ")}
            >
                <Logo
                    path="/"
                    size={50}
                    image={logo}
                />
            </div>
        </header>
    )
};

export default Header;