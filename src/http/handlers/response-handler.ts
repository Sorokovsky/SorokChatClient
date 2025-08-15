import { ACCESS_TOKEN_KEY } from "@/constants/api.constant";
import type { AxiosResponse } from "axios";

export const responseHandler = (response: AxiosResponse): AxiosResponse => {
    const authorization: string = response.headers["authorization"] || "";
    const parts = authorization.split(" ");
    if (parts.length == 2) {
        const [_, token] = parts;
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
    return response;
}