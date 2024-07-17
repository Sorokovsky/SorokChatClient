import { FC, memo } from "react";
import { IInput } from "./input.interface";

const Input: FC<IInput> = ({type = 'text', className = "", placeholder = ""}): JSX.Element => {
    return (
        <input 
            type={type}
            className={className}
            placeholder={placeholder} 
        />
    );
};

export default memo(Input);