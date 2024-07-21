import Link from "next/link";
import { FC, memo } from "react";
import { ISettingItem } from "./setting-item.interface";
import styles from "./setting-item.module.sass"
import cn from "classnames"

const SettingItem: FC<ISettingItem> = ({item}): JSX.Element => {
    return (
        <Link 
        className={cn(styles.link)} href={item.path}
        >
            <item.Icon />
            <h3>{item.title}</h3>
        </Link>
    )
}

export default memo(SettingItem);