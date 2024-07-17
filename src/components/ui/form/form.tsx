import { FC, memo } from "react";
import { IForm } from "./form.interface";

const Form: FC<IForm> = ({children}): JSX.Element => {
    return (
        <form>
            {children}
        </form>
    );
};

export default memo(Form);