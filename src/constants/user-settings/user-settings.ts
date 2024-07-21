import { IUserSetting } from "./user-settings.interface";
import { CiUser, CiLogin, CiLogout, CiSettings } from "react-icons/ci";
export const userSettings: IUserSetting[] = [
    {
        path: "/registration",
        Icon: CiUser,
        title: "Реєстрація",
        isPublic: true,
    },
    {
        path: "/login",
        Icon: CiLogin,
        title: "Авторизуватися",
        isPublic: true,
    },
    {
        path: '/logout',
        Icon: CiLogout,
        title: "Вийти",
        isPublic: false,
    },
    {
        path: '/user',
        Icon: CiSettings,
        title: "Налаштування",
        isPublic: false,
    },
];