import Image from "next/image";
import { FC } from "react";
import { IAvatar } from "./avatar.interface";
import styles from "./avatar.module.sass";

const Avatar: FC<IAvatar> = ({Icon, clickHandler, image, size}): JSX.Element => {
    return (
        <button
            className={styles.avatar}
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

export default Avatar;