import { FC } from "react";
import { ISidebar } from "./sidebar.interface";
import styles from "./sidebar.module.sass";

const Sidebar: FC<ISidebar> = ({isOpen, position = 'right'}): JSX.Element => {
    return (
        isOpen 
        ?
        <aside
        className={[styles.sidebar, styles[position]].join(" ")}
        >

        </aside>
        : <></>
    );
};

export default Sidebar;