import { SERVER_URL } from "@/constants/api.constant";
import { Axios } from "axios";
import { requestHandler } from "./handlers/request-handler";
import { responseHandler } from './handlers/response-handler';

const instance = new Axios({
    baseURL: "/api",
    withCredentials: false
});
instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(responseHandler);
export const httpClient = instance;