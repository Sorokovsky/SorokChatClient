import { TUser } from "@/types/user.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserProfile } from "./async-actions";
import { IUser } from "./user.interface";

const initialState: IUser = {
    user: null,
    accessToken: null
};



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getAccessToken(state) {
            let token = localStorage.getItem("access_token");
            if(token) state.accessToken = token;
            else state.accessToken = null;
        },

        setAccessToken(state, action: PayloadAction<string>) {
            localStorage.setItem('access_token', action.payload);
            state.accessToken = action.payload;
        },
    },
    extraReducers: buider => {
        buider.addCase(getUserProfile.fulfilled, (state, action: PayloadAction<TUser>) => {
            state.user = action.payload;
        });

        buider.addCase(getUserProfile.rejected, (state, action) => {
            console.log('error');
            
        });
    }
});

export const userActions = {...userSlice.actions};
export const useAsyncActions = {getUserProfile};
export default userSlice.reducer;