import { bindActionCreators } from "@reduxjs/toolkit";
import { actions } from "@/store/store";
import { useDispatch } from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch();
    return {
        ...bindActionCreators(actions, dispatch),
    }; 
};