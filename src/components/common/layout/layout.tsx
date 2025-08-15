"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC } from "react";
import { Header } from "../header/header";
import type { ILayout } from "./layout.props";

const client = new QueryClient();

export const Layout: FC<ILayout> = ({children}) => {
    return (
        <QueryClientProvider client={client} >
            <html lang="en">
                <body>
                    <Header />
                    {children}
                </body>
            </html>
        </QueryClientProvider>
    );
}