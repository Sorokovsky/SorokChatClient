import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
            let token = localStorage.getItem("accessToken");
            if(token) state.accessToken = token;
            else state.accessToken = null;
        },

        setAccessToken(state, action: PayloadAction<string>) {
            localStorage.setItem('accessToken', action.payload);
            state.accessToken = action.payload;
        }
    },
    extraReducers: buider => {

    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;