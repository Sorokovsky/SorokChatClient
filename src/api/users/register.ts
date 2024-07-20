import { HttpStatusCode } from "axios";
import { getInstanse } from "../instance";
import { TRegistrationDto } from "@/types/registration.type"; 
import { TUser } from "@/types/user.type";
import { Endpoint } from "../endpoints.const";

export const registerUser = async (registrationDto: TRegistrationDto) => {
    const instance = getInstanse();
    const response = await instance.post<TUser, any, TRegistrationDto>(Endpoint.REGISTER, registrationDto);
    if(response.status == HttpStatusCode.Created) return response.data;
    return Promise.reject(response.data);
};