'use client'
import { FC, memo, useCallback, useEffect, useState } from "react";
import { IHeader } from "./header.interface";
import { FaRegUserCircle } from "react-icons/fa";
import styles from './header.module.sass';
import logo from "@/images/logo.svg"
import Logo from "@/ui/logo/logo";
import Avatar from "@/ui/avatar/avatar";
import { useAppSelector } from "@/store/store";
import cn from "classnames";
import { useActions } from "@/hooks/useActions";
import { useAvatar } from "@/hooks/useAvatar";

const Header: FC<IHeader> = ({className}): JSX.Element => {
    const [avatarPath, setAvatarPath ] = useState<string | undefined>(undefined);
    const { isShow } = useAppSelector(state => state.settings)
    const { user } = useAppSelector(state => state.user);
    const { toggle } = useActions();
    const iconSize = 40;
    const showSetting = useCallback(
        () => {
            toggle();
        }, 
        [isShow]
    );
    useEffect(() => {
        if(user === null) setAvatarPath(undefined);
        else if(user?.avatarPath?.trim() === '') setAvatarPath(undefined);
        else setAvatarPath(useAvatar(user?.avatarPath));
    }, [user]);
    return (
        <header
        className={cn(styles.header, className)}
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
                    image={avatarPath}
                    clickHandler={showSetting}
                />

            </div>
        </header>
    )
};

export default memo(Header);