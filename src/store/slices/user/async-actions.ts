import { getProfileApi } from "@/api/users/get-profile";
import { loginUserApi } from "@/api/users/login";
import { logoutApi } from "@/api/users/logout";
import { registerUserApi } from "@/api/users/register";
import { TLoginDto } from "@/types/login.type";
import { TRegistrationDto } from "@/types/registration.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserProfile = createAsyncThunk(
    "user/getById",
    async () => {
        return await getProfileApi();
    }
);

export const registerUser = createAsyncThunk(
    "user/register",
    async (registerDto: TRegistrationDto) => {
        return await registerUserApi(registerDto);
    }
);

export const loginUser = createAsyncThunk(
    "user/login",
    async (loginDto: TLoginDto) => {
        return await loginUserApi(loginDto);
    }
);

export const logoutUser = createAsyncThunk(
    "user/logout",
    async () => {
        return await logoutApi();
    }
)