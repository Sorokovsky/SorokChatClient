'use client'
import { ChangeEvent, useState } from "react";

export function useDebounce(
    callback: (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, 
    miliseconds: number
) {
    const [timer, setTimer] = useState<any>(null);
    return (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTimer(clearTimeout(timer));
        setTimer(setTimeout(() => callback(ev), miliseconds));
    }
}