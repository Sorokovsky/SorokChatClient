import Link from "next/link";
import { FC, memo } from "react";
import { ISettingItem } from "./setting-item.interface";

const SettingItem: FC<ISettingItem> = ({item}): JSX.Element => {
    return (
        <Link href={item.path}>
            <item.Icon />
            <h3>{item.title}</h3>
        </Link>
    )
}

export default memo(SettingItem);