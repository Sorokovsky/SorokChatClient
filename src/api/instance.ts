import axios from "axios";

axios.interceptors.response.use(function (response) {
    const auth = response.headers["Authorization"];
    if(auth) {
        auth.split(" ");
        if(auth.length === 2) {
            saveAccessToken(auth[1]);
        }
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});

export const getInstanse = () => axios.create({
    baseURL: process.env.API,
    headers: {"Authorization": `Bearer ${localStorage.getItem("access_token") || ""}`}
});

const saveAccessToken = (token: string) => {
    localStorage.setItem("access_token", token);
}