import { settingsActions } from "@/store/slices/settings/settings";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userActions } from "@/store/slices/user/user";
import { getUserProfile } from "@/store/slices/user/async-actions";
import { useDispatch } from "react-redux";

export const useActions = () => {
    const actions = {...settingsActions, ...userActions};
    const dispatch = useDispatch();
    return {
        ...bindActionCreators(actions, dispatch)
    }; 
};