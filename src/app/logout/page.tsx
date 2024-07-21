'use client'
import { useActions } from "@/hooks/useActions";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { memo, useEffect } from "react";

const Logout: NextPage = (): JSX.Element => {
    const { logoutUser } = useActions();
    const { push } = useRouter();
    useEffect(() => {
        logoutUser();
        push('/login');
    }, []);
    return (
        <div>logout</div>
    );
};

export default memo(Logout);