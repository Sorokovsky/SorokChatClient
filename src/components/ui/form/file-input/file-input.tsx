import Image from "next/image";
import { FC, memo, forwardRef, useState } from "react";
import { IFileInput } from "./file-input.interface";
import cn from "classnames";
import styles from "./file-input.module.sass";

const FileInput: FC<IFileInput> = forwardRef<HTMLInputElement, IFileInput>(
    ({id, image, size, ...rest}, ref): JSX.Element => {
        const [src, setSrc ] = useState(image || "");
        return (
            <label htmlFor={id} className={cn(styles.label)}>
                <Image src={src} width={size} height={size} priority alt="" />
                <input 
                    type={'file'} 
                    ref={ref}
                    className={cn(styles.input)}
                    onChange={(ev) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            setSrc(reader.result?.toString() || image);
                            console.log(src);
                            
                            
                        };
                        reader.readAsDataURL(ev.target.files![0])
                    }}
                    {...rest}
                    value={src}
                />
            </label>
        );
    }
);

export default memo(FileInput);