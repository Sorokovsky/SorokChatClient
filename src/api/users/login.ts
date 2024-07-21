import { TLoginDto } from "@/types/login.type";
import { getInstanse } from "../instance";
import { Endpoint } from "../endpoints.const";
import { TUser } from "@/types/user.type";
import { AxiosResponse } from "axios";

export const loginUserApi = async (loginDto: TLoginDto) => {
    try {
        const instance = getInstanse();
        const response = await instance.post<TUser, AxiosResponse<TUser, TLoginDto>, TLoginDto>(
            Endpoint.LOGIN, loginDto
        );
        return response.data;
    } catch (error: any) {
        return Promise.reject(error.response.data);
    }
};