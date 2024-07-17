import { NextPage } from "next";
import { memo } from "react";
import RegistrationPage from "@/pages/registration-page/registration";

const Registration: NextPage = (): JSX.Element => {
    return <RegistrationPage />
}

export default memo(Registration);