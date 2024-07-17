import { FC, memo } from "react";
import { IButton } from "./button.interface";
import cn from "classnames";
import styles from "./button.module.sass";

const Button: FC<IButton> = ({children, className, ...rest}): JSX.Element => {
    return (
        <button
        className={cn(className, styles.button)}
        {...rest}
        >
            {children}
        </button>
    );
};

export default memo(Button);