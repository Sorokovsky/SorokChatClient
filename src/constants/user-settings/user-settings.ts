import { useActions } from "@/hooks/useActions";
import { IUserSetting } from "./user-settings.interface";
import { CiUser, CiLogin, CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";
export const userSettings: IUserSetting[] = [
    {
        path: "/registration",
        Icon: CiUser,
        title: "Реєстрація",
        isPublic: false,
    },
    {
        path: "/login",
        Icon: CiLogin,
        title: "Авторизуватися",
        isPublic: false,
    },
    {
        path: '/logout',
        Icon: CiLogout,
        title: "Вийти",
        isPublic: true,
    },
];