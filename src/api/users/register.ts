import { getInstanse } from "../instance";
import { TRegistrationDto } from "@/types/registration.type"; 
import { TUser } from "@/types/user.type";
import { Endpoint } from "../endpoints.const";
import { AxiosResponse } from "axios";

export const registerUserApi = async (registrationDto: TRegistrationDto) => {
    try {
        const instance = getInstanse();
        const response = await instance.post<TUser, AxiosResponse<TUser, TRegistrationDto>, TRegistrationDto>(
            Endpoint.REGISTER, registrationDto
        );
        return response.data;
    } catch (error: any) {
        return Promise.reject(error.response.data);
    }
};