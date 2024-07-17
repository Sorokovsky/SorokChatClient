'use client'
import { FC, memo, useState } from "react";
import { ISearch } from "./search.interface";
import cn from "classnames";
import styles from "./search.module.sass";

const Search: FC<ISearch> = ({placeholder, searchHandler}): JSX.Element => {
    const [value, setValue] = useState("");
    return (
        <input 
        className={cn(styles.search)}
        type="search" 
        placeholder={placeholder} 
        onChange={ev => {
            setValue(ev.target.value);
            searchHandler(ev);
        }}
        value={value}
        />
    );
};

export default memo(Search);