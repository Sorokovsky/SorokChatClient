import { settingsActions } from "@/store/slices/settings/settings";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userActions } from "@/store/slices/user/user";
import { asyncActions } from "@/store/store";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/store/store";

export const useActions = () => {
    const actions = {...settingsActions, ...userActions};
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();
    return {
        ...bindActionCreators(actions, dispatch),
        ...bindActionCreators(asyncActions, dispatch)
    }; 
};