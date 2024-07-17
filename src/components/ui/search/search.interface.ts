import { ChangeEvent } from "react";

export interface ISearch {
    placeholder: string;
    searchHandler: (ev: ChangeEvent<HTMLInputElement>) => void;
}