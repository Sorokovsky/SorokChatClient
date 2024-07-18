import { FC, memo, useEffect, useRef } from "react";
import { ISidebar } from "./sidebar.interface";
import styles from "./sidebar.module.sass";
import cn from "classnames";
const Sidebar: FC<ISidebar> = ({isOpen, position = 'right', close, children}): JSX.Element => {
    const isOpenClass = styles.isOpen;
    const body = useRef<HTMLElement>();
    const clickHandler = (ev: globalThis.MouseEvent) => {       
        let target = ev.target as HTMLElement;
        if((!target.closest(`.${styles.sidebar}`) && !target.closest(`button`) || target.closest(`.${styles.sidebar} a`))) {
            console.log(target);
            
            close();
        }
    }

    useEffect(() => {
        body.current = document.body;
        body.current?.addEventListener("click", clickHandler);
        return () => {
            body?.current?.removeEventListener("click", clickHandler);
        }
    }, [body.current]
    );
    return (
        <aside
        className={cn(styles.sidebar, styles[position], {
            [isOpenClass]: isOpen
        })}
        >
            {children}
        </aside>
    );
};

export default memo(Sidebar);