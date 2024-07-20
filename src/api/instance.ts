import axios from "axios";

export const getInstanse = () => {
    const instanse = axios.create({
    baseURL: process.env.API,
    headers: {"Authorization": `Bearer ${localStorage.getItem("access_token") || ""}`}
    });
    instanse.interceptors.response.use(function (response) {
        const auth = response.headers["Authorization"];
        console.log('auth');
        if(auth) {
            
            let parts = auth.split(" ");
            if(parts.length === 2) {
                saveAccessToken(auth[1]);
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