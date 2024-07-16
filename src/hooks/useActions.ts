import { useDispatch } from "react-redux"
import { actions as settingActions } from "@/store/slices/settings/settings";
import { bindActionCreators } from "@reduxjs/toolkit";

export const useActions = () => {
    const actions = {...settingActions}
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch); 
}