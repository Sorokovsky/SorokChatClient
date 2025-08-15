"use client"
import { AVATAR_SIZE, DEFAULT_AVATAR } from "@/constants/ui.constant";
import Image from "next/image";
import type { FC } from "react";
import cn from "clsx"
import type { IAvatar } from './avatar.props';

export const Avatar: FC<IAvatar> = ({ image = DEFAULT_AVATAR, callback = () => { }, size = AVATAR_SIZE }) => {
    return (
        <button onClick={callback} className={cn("circle")} style={{ width: size, height: size }} >
            <Image src={image} width={size} height={size} alt="Avatar" priority={true} />
        </button>
    );
};