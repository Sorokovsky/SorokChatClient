'use client'
import { FC, memo, useEffect, useState } from "react"
import cn from 'classnames';
import styles from "./error.module.sass";
import { useAppSelector } from "@/store/store";
import { useActions } from "@/hooks/useActions";
export const Error: FC = (): JSX.Element => {
    const { error: userError } = useAppSelector(state => state.user);
    const { clearError } = useActions();
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const errorMessage = userError;
        setError(errorMessage);
        if(error !== null) {
            setTimeout(() => clearError(), 3000);
        }
    }, [userError, error]);
    return (
        <div
            className={cn(styles.error, {
                [styles.active]: error !== null
            })}
        >{error}</div>
    );
};

export default memo(Error);