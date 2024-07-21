import Image from "next/image";
import { FC, memo } from "react";
import { IAvatar } from "./avatar.interface";
import styles from "./avatar.module.sass";
import cn from "classnames";

const Avatar: FC<IAvatar> = ({Icon, clickHandler, image, size}): JSX.Element => {
    console.log('avatar', image);
    
    return (
        <button
            className={cn(styles.avatar)}
            onClick={clickHandler}
        >
            {
                image 
                &&
                <Image 
                    className={cn(styles.avatar)}
                    src={image!}
                    alt=""
                    priority
                    width={size}
                    height={size}
                />  
            }

            {   
                (!image && Icon) &&
                <Icon 
                size={size}
                color={"white"}
                />
                
            }
        </button>
    );
};

export default memo(Avatar);