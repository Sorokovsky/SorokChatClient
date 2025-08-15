import { DEFAULT_LOGO, LOGO_SIZE } from "@/constants/ui.constant";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import cn from "clsx";
import type { ILogo } from "./logo.props";

export const Logo: FC<ILogo> = ({href = "/", image = DEFAULT_LOGO, size = LOGO_SIZE}) => {
    return (
        <Link href={href} className={cn("circle")}>
            <Image src={image} alt={"Лого"} width={size} height={size} />
        </Link>
    );
};