import { FC, memo } from "react";
import { ISidebar } from "./sidebar.interface";
import styles from "./sidebar.module.sass";
import cn from "classnames";
import { userSettings } from "@/consts/user-settings/user-settings";
import Link from "next/link";
const Sidebar: FC<ISidebar> = ({isOpen, position = 'right'}): JSX.Element => {
    const isOpenClass = styles.isOpen;
    return (
        <aside
        className={cn(styles.sidebar, styles[position], {
            [isOpenClass]: isOpen
        })}
        >
            {userSettings.map(({Icon, path, title}) => {
                return (
                    <Link key={path} href={path}>
                        <Icon />
                        <h3>{title}</h3>
                    </Link>
                )
            })}
        </aside>
    );
};

export default memo(Sidebar);