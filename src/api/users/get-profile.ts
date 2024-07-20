import { TUser } from "@/types/user.type";
import { HttpStatusCode } from "axios";
import { Endpoint } from "../endpoints.const";
import { getInstanse } from "../instance";

export const getProfileApi = async () => {
    try {
        const instance = getInstanse();
        const response = await instance.get<TUser>(Endpoint.PROFILE);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error.response.data)
    }
};