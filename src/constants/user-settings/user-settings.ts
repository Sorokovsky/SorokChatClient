import { IUserSetting } from "./user-settings.interface";
import { CiUser, CiLogin } from "react-icons/ci";

export const userSettings: IUserSetting[] = [
    {
        path: "/registration",
        Icon: CiUser,
        title: "Реєстрація",
    },
    {
        path: "/login",
        Icon: CiLogin,
        title: "Авторизуватися",
    }
];