'use client'
import { ChangeEvent, FC, memo, useState } from "react";
import { ISearch } from "./search.interface";
import cn from "classnames";
import styles from "./search.module.sass";
import { useDebounce } from "@/hooks/useDebounce";

const Search: FC<ISearch> = ({placeholder, searchHandler}): JSX.Element => {
    const [value, setValue] = useState("");
    const onChange = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        searchHandler(ev);
    }
    const handler = useDebounce(onChange, 500);
    return (
        <input 
        className={cn(styles.search)}
        type="search" 
        placeholder={placeholder} 
        onChange={(ev) => {
            setValue(ev.target.value);
            handler(ev);
        }}
        value={value}
        />
    );
};

export default memo(Search);