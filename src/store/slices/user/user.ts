import { TUser } from "@/types/user.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as asyncActions from "./async-actions";
import { IUser } from "./user.interface";

const { getUserProfile, registerUser } = asyncActions;

const initialState: IUser = {
    user: null,
    accessToken: null,
    error: null,
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
            state.error = action.error.message!;
                        
        });

        buider.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
        });

        buider.addCase(registerUser.rejected, (state, action) => {
            state.error = action.error.message!;
        });
    }
});

export const userActions = {...userSlice.actions, ...asyncActions};
export default userSlice.reducer;