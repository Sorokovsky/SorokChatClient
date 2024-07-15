'use client'
import { FC, useCallback } from "react";
import { IHeader } from "./header.interface";
import { FaRegUserCircle } from "react-icons/fa";
import styles from './header.module.sass';
import logo from "@/images/logo.svg"
import Logo from "@/ui/logo/logo";
import Avatar from "@/ui/avatar/avatar";
import { useRouter } from "next/navigation";

const Header: FC<IHeader> = (): JSX.Element => {
    const iconSize = 40;
    const { push } = useRouter();
    const showSetting = useCallback(
        () => {
            push("/user-settings");
        }, 
        []
    );
    return (
        <header
        className={styles.header}
        >
            <div 
            className={["container", styles.container].join(" ")}
            >
                <Logo
                    path="/"
                    size={iconSize}
                    image={logo}
                />
                
                <Avatar 
                    Icon={FaRegUserCircle}
                    size={iconSize}
                    clickHandler={showSetting}
                />

            </div>
        </header>
    )
};

export default Header;