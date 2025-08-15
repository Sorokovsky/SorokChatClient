"use client"
import { useGetProfile } from "@/hooks/use-get-profile.hook";
import type { NextPage } from "next";

export const IndexPage: NextPage = () => {
    useGetProfile();
    return (
        <>
        </>
    );
}