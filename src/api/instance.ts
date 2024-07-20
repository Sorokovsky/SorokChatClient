import axios from "axios";

export const getInstanse = () => axios.create({
    baseURL: process.env.API,
    headers: {"Authorization": `Bearer ${localStorage.getItem("access_token") || ""}`} 
});