import { TUser } from "@/types/user.type";
import { HttpStatusCode } from "axios";
import { Endpoint } from "../endpoints.const";
import { getInstanse } from "../instance";

export const getProfile = async () => {
    const instance = getInstanse();
    const response = await instance.get<TUser>(Endpoint.PROFILE);
    if(response.status == HttpStatusCode.Ok) return response.data;
    else return Promise.reject(response.data);
};