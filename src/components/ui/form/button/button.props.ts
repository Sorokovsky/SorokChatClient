import type { ReactNode } from "react";

export interface IButton {
    children: ReactNode;
    type: HTMLButtonElement['type']
};