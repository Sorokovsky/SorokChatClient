import Image from "next/image";
import { FC, memo, forwardRef, useState, ChangeEvent, useEffect } from "react";
import { IFileInput } from "./file-input.interface";
import cn from "classnames";
import styles from "./file-input.module.sass";

const FileInput: FC<IFileInput> = forwardRef<HTMLInputElement, IFileInput>(
    ({id, image, size, onChange, value, defaultValue, ...rest}, ref): JSX.Element => {
        const [file, setFile ] = useState<File | undefined>(undefined);
        const defaultImage: string = "https://static-00.iconduck.com/assets.00/user-avatar-icon-2048x2048-wpp8os2d.png";
        const [src, setSrc] = useState(file ? URL.createObjectURL(file) : (image || defaultImage));
        useEffect(() => {
            console.log(src);
            
            setSrc(file ? URL.createObjectURL(file) : (image || defaultImage));
        }, [file, image]);
        return (
            <label htmlFor={id} className={cn(styles.label)}>
                <Image className={cn(styles.image)}  src={src} width={size} height={size} priority alt="" />
                <input 
                    type={'file'} 
                    ref={ref}
                    id={id}
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