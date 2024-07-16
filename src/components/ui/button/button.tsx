import { FC } from "react";
import { IButton } from "./button.interface";
import cn from "classnames";

const Button: FC<IButton> = ({className, ...rest}): JSX.Element => {
    return (
        <button
        className={cn(className)}
        {...rest}
        >

        </button>
    )
}