'use client'
import { FC, memo, useCallback } from "react";
import { IHeader } from "./header.interface";
import { FaRegUserCircle } from "react-icons/fa";
import styles from './header.module.sass';
import logo from "@/images/logo.svg"
import Logo from "@/ui/logo/logo";
import Avatar from "@/ui/avatar/avatar";
import { useAppSelector } from "@/store/store";
import { hide, show } from "@/store/slices/settings/settings";
import { useDispatch } from "react-redux";
import cn from "classnames";

const Header: FC<IHeader> = (): JSX.Element => {
    const {isShow} = useAppSelector(state => state.settings);
    const dispatch = useDispatch();
    const iconSize = 40;
    const showSetting = useCallback(
        () => {
            if(isShow) {
                dispatch(hide());
            }
            else {
                dispatch(show());
            }
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