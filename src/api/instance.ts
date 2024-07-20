import axios, { Axios, AxiosHeaders } from "axios";

export const getInstanse = () => {
    const instanse = axios.create({
    baseURL: process.env.API,
    headers: {"Authorization": `Bearer ${localStorage.getItem("access_token") || ""}`},
    withCredentials: true
    });
    instanse.interceptors.response.use(function (response) {
        const header: AxiosHeaders = response.headers as AxiosHeaders;
        const auth = header["authorization"];        
        if(auth) {
            
            let parts = auth.split(" ");
            
            if(parts.length === 2) {                
                saveAccessToken(parts[1]);
            }
        }
        return response;
    }, function (error) {
        return Promise.reject(error);
    });
    return instanse;
}

const saveAccessToken = (token: string) => {
    localStorage.setItem("access_token", token);
}