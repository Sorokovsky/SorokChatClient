'use client'
import { store } from "@/store/store";
import { FC, useRef } from "react";
import { Provider } from "react-redux";
import { IStoreProvider } from "./store-provider.interface";

const StoreProvider: FC<IStoreProvider> = ({children}): JSX.Element => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}
export default StoreProvider;