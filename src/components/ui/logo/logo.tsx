import { LOGO_SIZE } from "@/constants/ui.constant";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { ILogo } from "./logo.props";

export const Logo: FC<ILogo> = ({href, image, size = LOGO_SIZE}) => {
    return (
        <Link href={href}>
            <Image src={image} alt={"Лого"} width={size} height={size} />
        </Link>
    );
};