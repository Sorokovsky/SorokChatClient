import type { FC } from "react";
import cn from "clsx";
import styles from "./header.module.sass";
import { Logo } from '../../ui/logo/logo';

export const Header: FC = () => {
    return (
        <header className={cn(styles.header)}>
            <div className={cn(styles.container)}>
                <Logo href="/" image="logo.svg" />
            </div>
        </header>
    );
}