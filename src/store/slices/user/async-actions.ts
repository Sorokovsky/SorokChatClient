import { createAsyncThunk } from "@reduxjs/toolkit";

export const getById =  createAsyncThunk(
    "user/getById",
    async (userId: number, thunkApi) => {
        
    }
);