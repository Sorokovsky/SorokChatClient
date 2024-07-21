import { Endpoint } from "../endpoints.const";
import { getInstanse } from "../instance";

export const logoutApi = async () => {
    try {
        const instance = getInstanse();
        const response = await instance.patch(Endpoint.LOGOUT);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error.response.data);
    }
};