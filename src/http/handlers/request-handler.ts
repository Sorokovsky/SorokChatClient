import { ACCESS_TOKEN_KEY } from "@/constants/api.constant";
import type { InternalAxiosRequestConfig } from "axios";

export const requestHandler = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token: string = localStorage.getItem(ACCESS_TOKEN_KEY) || "";    
    config.headers["authorization"] = `Bearer ${token}`;
    return config;
};