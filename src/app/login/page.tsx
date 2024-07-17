import { NextPage } from "next";
import { memo } from "react";
import LoginPage from "@/pages/login-page/login";

const Login: NextPage = (): JSX.Element => {
    return <LoginPage />
}

export default memo(Login);