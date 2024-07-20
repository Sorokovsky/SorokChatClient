import { TUser } from "@/types/user.type";
import { getInstanse } from "../instance";

export const getProfile = async (): Promise<TUser> => {
    const instance = getInstanse();
    const response = await instance.get<TUser>("/authorization/profile");
    return response.data;
};