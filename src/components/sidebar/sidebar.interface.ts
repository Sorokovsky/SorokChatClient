import { ReactNode } from "react";

export type Position = 'left' | 'right';
export interface ISidebar {
    isOpen: boolean;
    position?: Position;
    close: () => void;
    children: ReactNode
};