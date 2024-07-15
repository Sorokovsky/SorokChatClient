import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from "react-redux";
import settingsReducer from './slices/settings/settings';
export const store = configureStore({
    reducer: {
        settings: settingsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispach = typeof store.dispatch;

export const useAppDispAttach: TypedUseSelectorHook<AppDispach> = store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;