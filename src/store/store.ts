import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import * as userAsyncActions from './slices/user/async-actions';
import settingsReducer, { settingsActions } from './slices/settings/settings';
import userReducer, { userActions } from './slices/user/user';
export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        user: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispach = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispach>();

export const useAppSelector = useSelector.withTypes<RootState>();

export const actions = {...settingsActions, ...userActions};