import Image from "next/image";
import { FC, memo, forwardRef, useState, ChangeEvent } from "react";
import { IFileInput } from "./file-input.interface";
import cn from "classnames";
import styles from "./file-input.module.sass";

const FileInput: FC<IFileInput> = forwardRef<HTMLInputElement, IFileInput>(
    ({id, image, size, onChange, ...rest}, ref): JSX.Element => {
        const [file, setFile ] = useState<File | undefined>(undefined);
        return (
            <label htmlFor={id} className={cn(styles.label)}>
                <Image src={file ? URL.createObjectURL(file) : image} width={size} height={size} priority alt="" />
                <input 
                    type={'file'} 
                    ref={ref}
                    className={cn(styles.input)}
                    {...rest}
                    onChange={(ev) => {
                        const target = ev.target || window.event?.srcElement;
                        const file = target.files![0];
                        setFile(file);
                        if(onChange) onChange(ev as ChangeEvent<HTMLInputElement>);
                    }}
                />
            </label>
        );
    }
);

export default memo(FileInput);