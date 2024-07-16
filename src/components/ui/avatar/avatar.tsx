import Image from "next/image";
import { FC, memo } from "react";
import { IAvatar } from "./avatar.interface";
import styles from "./avatar.module.sass";
import cn from "classnames";

const Avatar: FC<IAvatar> = ({Icon, clickHandler, image, size}): JSX.Element => {
    return (
        <button
            className={cn(styles.avatar)}
            onClick={clickHandler}
        >
            {
                Icon 
                ? 
                <Icon 
                size={size}
                color={"white"}
                /> 
                :
                <Image 
                    src={image!}
                    alt=""
                    priority
                    width={size}
                    height={size}
                />
            }
        </button>
    );
};

export default memo(Avatar);