import { IField } from "./form.interface";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const registrationsFields: IField[] = [
    {
        slug: "email",
        placeholder: "Email",
        type: "email",
        Icon: MdOutlineMail,
        registerOption: {
            required: true,
        },
    },
    {
        slug: "password",
        placeholder: "Пароль",
        type: "password",
        Icon: RiLockPasswordLine,
        registerOption: {
            required: true,
        },
    },
];