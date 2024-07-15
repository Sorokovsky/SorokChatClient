import { createSlice } from "@reduxjs/toolkit";
import { ISettings } from "./settings.interface";

export const initialState: ISettings = {
    isShow: false,
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        show(state) {
            state.isShow = true;
        },
        
        hide(state) {
            state.isShow = false;
        }
    }
});

export const { hide, show } = settingsSlice.actions;
export default settingsSlice.reducer;