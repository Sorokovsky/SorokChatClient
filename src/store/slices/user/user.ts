import { TUser } from "@/types/user.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as asyncActions from "./async-actions";
import { IUser } from "./user.interface";

const { getUserProfile, registerUser, loginUser, logoutUser } = asyncActions;

const initialState: IUser = {
    user: null,
    accessToken: null,
    error: null,
    isLoading: false
};



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: buider => {
        buider.addCase(getUserProfile.fulfilled, (state, action: PayloadAction<TUser>) => {
            state.user = action.payload;
            state.isLoading = false;
        });

        buider.addCase(getUserProfile.pending, (state, action) => {
            state.isLoading = true;
        });

        buider.addCase(getUserProfile.rejected, (state, action) => {
            state.error = action.error.message!;
            state.isLoading = false;
                        
        });

        buider.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        });

        buider.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true;
        });

        buider.addCase(registerUser.rejected, (state, action) => {
            state.error = action.error.message!;
            state.isLoading = false;
        });

        buider.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        });

        buider.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
        });

        buider.addCase(loginUser.rejected, (state, action) => {
            state.error = action.error.message!;
            state.isLoading = false;
        });

        buider.addCase(logoutUser.fulfilled, (state, action) => {
            state.user = null;
            state.isLoading = false;
        });

        buider.addCase(logoutUser.pending, (state, action) => {
            state.isLoading = true;
        });

        buider.addCase(logoutUser.rejected, (state, action) => {
            state.error = action.error.message!;
            state.isLoading = false;
        });
    }
});

export const userActions = {...userSlice.actions, ...asyncActions};
export default userSlice.reducer;