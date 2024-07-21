import UserPage from "@/components/pages/user-page/user-page";
import { NextPage } from "next";
import { memo } from "react";

const UserSettings: NextPage = (): JSX.Element => {
    return <UserPage />
};

export default memo(UserSettings);