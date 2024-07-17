'use client'
import { FC, memo, useCallback } from "react";
import { IHeader } from "./header.interface";
import { FaRegUserCircle } from "react-icons/fa";
import styles from './header.module.sass';
import logo from "@/images/logo.svg"
import Logo from "@/ui/logo/logo";
import Avatar from "@/ui/avatar/avatar";
import { useAppSelector } from "@/store/store";
import cn from "classnames";
import { useActions } from "@/hooks/useActions";

const Header: FC<IHeader> = (): JSX.Element => {
    const {isShow} = useAppSelector(state => state.settings);
    const { toggle } = useActions();
    const iconSize = 40;
    const showSetting = useCallback(
        () => {
            toggle();
        }, 
        [isShow]
    );
    return (
        <header
        className={cn(styles.header)}
        >
            <div 
            className={cn("container", styles.container)}
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

export default memo(Header);