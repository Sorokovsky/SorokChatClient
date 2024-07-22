import Image from "next/image";
import { FC, memo, forwardRef, useState } from "react";
import { IFileInput } from "./file-input.interface";

const FileInput: FC<IFileInput> = forwardRef<HTMLInputElement, IFileInput>(
    ({id, image, size, ...rest}, ref): JSX.Element => {
        const [src, setSrc ] = useState(image || "");
        return (
            <label htmlFor={id}>
                <Image src={src} width={size} height={size} priority alt="" />
                <input 
                    type={'file'} 
                    ref={ref}
                    onChange={(ev) => {
                        console.log(ev.target.value);
                        setSrc(ev.target.value);
                    }}
                    {...rest}
                    value={src}
                />
            </label>
        );
    }
);

export default memo(FileInput);