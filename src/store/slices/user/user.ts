import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./user.interface";

const initialState: IUser = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: buider => {

    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;