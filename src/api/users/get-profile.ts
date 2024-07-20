import { TUser } from "@/types/user.type";
import { getInstanse } from "../instance";

export const getProfile = async () => {
    const instance = getInstanse();
    const response = await instance.get<TUser>("/authorization/profile");
    if(response.status == 200) return response.data;
    else return Promise.reject(response.data);
};