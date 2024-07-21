import LogoutPage from "@/components/pages/logout-page/logout-page";
import { NextPage } from "next";
import { memo } from "react";

const Logout: NextPage = (): JSX.Element => {
    return <LogoutPage />
};

export default memo(Logout);