import { settingsActions } from "@/store/slices/settings/settings";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userActions } from "@/store/slices/user/user";
import * as userAsyncActions from "@/store/slices/user/async-actions";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/store/store";

export const useActions = () => {
    const actions = {...settingsActions, ...userActions};
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();
    return {
        ...bindActionCreators(actions, dispatch),
        ...bindActionCreators(userAsyncActions, dispatch)
    }; 
};