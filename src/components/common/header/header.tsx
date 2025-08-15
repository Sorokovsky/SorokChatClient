import type { FC } from "react";
import cn from "clsx";
import styles from "./header.module.sass";
import { Logo } from '@/ui/logo/logo';
import { Avatar } from "@/components/ui/avatar/avatar";

export const Header: FC = () => {
    return (
        <header className={cn(styles.header)}>
            <div className={cn(styles.container)}>
                <Logo />
                <Avatar />
            </div>
        </header>
    );
}