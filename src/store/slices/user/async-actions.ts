import { getProfileApi } from "@/api/users/get-profile";
import { registerUserApi } from "@/api/users/register";
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