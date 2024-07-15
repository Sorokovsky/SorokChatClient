import { FC, memo } from "react";
import { ISidebar } from "./sidebar.interface";
import styles from "./sidebar.module.sass";
import cn from "classnames";

const Sidebar: FC<ISidebar> = ({isOpen, position = 'right'}): JSX.Element => {
    const isOpenClass = styles.isOpen;
    return (
        <aside
        className={cn(styles.sidebar, styles[position], {
            [isOpenClass]: isOpen
        })}
        >

        </aside>
    );
};

export default memo(Sidebar);