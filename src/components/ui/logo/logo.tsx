'use client'
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ILogo } from "./logo.interface";

const Logo: FC<ILogo> = ({image, path, size}): JSX.Element => {
    return (
        <Link
            href={path}
        >
            <Image 
                src={image} 
                width={size} 
                height={size}
                alt="SorokChat"
                priority
                />
        </Link>
    );
};

export default Logo;