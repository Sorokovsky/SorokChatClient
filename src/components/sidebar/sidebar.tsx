import { FC, memo } from "react";
import { ISidebar } from "./sidebar.interface";
import styles from "./sidebar.module.sass";
import cn from "classnames";
import { userSettings } from "@/consts/user-settings/user-settings";
import SettingsList from "@/components/settings-list/settings-list";
const Sidebar: FC<ISidebar> = ({isOpen, position = 'right'}): JSX.Element => {
    const isOpenClass = styles.isOpen;
    return (
        <aside
        className={cn(styles.sidebar, styles[position], {
            [isOpenClass]: isOpen
        })}
        >
            <SettingsList settings={userSettings} />
        </aside>
    );
};

export default memo(Sidebar);