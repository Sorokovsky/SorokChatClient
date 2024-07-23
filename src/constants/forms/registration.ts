import { IField } from "./form.interface";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const registrationsFields: IField[] = [
    {
        slug: "email",
        placeholder: "Email",
        type: "email",
        Icon: MdOutlineMail,
        defaultValue: "",
        registerOption: {
            required: true,
        },
    },
    {
        slug: "password",
        placeholder: "Пароль",
        defaultValue: "",
        type: "password",
        Icon: RiLockPasswordLine,
        registerOption: {
            required: true,
        },
    },
];