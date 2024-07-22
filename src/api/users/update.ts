import { TUpdateUser } from "@/types/update-user.type";
import { TUser } from "@/types/user.type";
import { AxiosResponse } from "axios";
import { Endpoint } from "../endpoints.const";
import { getInstanse } from "../instance";

export const updateUserApi = async (updateDto: TUpdateUser) => {
    try {
        const instance = getInstanse();
        const response = await instance.putForm<TUser, AxiosResponse<TUser, TUpdateUser>, TUpdateUser>(
            Endpoint.USERS, updateDto
        );
        return response.data;
    } catch (error: any) {
        return Promise.reject(error.response.data);
    }
};