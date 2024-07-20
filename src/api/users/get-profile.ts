import { TUser } from "@/types/user.type";
import { getInstanse } from "../instance";

export const getProfile = async (): Promise<TUser> => {
    const instance = getInstanse();
    const user = (await instance.get<TUser>("/authorization/profile")).data;
    return user;
};