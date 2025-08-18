import type { FC } from "react";
import type { IButton } from "./button.props";
import cn from "clsx";
import styles from "./button.module.sass";

export const Button: FC<IButton> = ({children}) => {
    return (
        <button className={cn(styles.button)}>
            {children}
        </button>
    );
};