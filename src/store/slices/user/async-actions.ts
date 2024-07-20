import { getProfile } from "@/api/users/get-profile";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserProfile =  createAsyncThunk(
    "user/getById",
    async () => {
        return await getProfile();
    }
);