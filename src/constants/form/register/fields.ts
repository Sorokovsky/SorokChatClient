import { IField } from '@/components/ui/form/field/field.props';
export const REGISTER_FIELDS: IField[] = [
    {
        label: "Електронна адреса",
        input: {
            name: "email",
            type: "email",
            options: {
                required: true,
            },
        },
    },
    {
        label: "Пароль",
        input: {
            name: "password",
            type: "password",
            options: {
                required: true,
            },
        },
    },
    {
        label: "Ім'я",
        input: {
            name: "firstName",
            type: "text",
            options: {
                required: false,
            },
        },
    },
    {
        label: "Прізвище",
        input: {
            name: "lastName",
            type: "text",
            options: {
                required: false,
            },
        },
    },
    {
        label: "По батькові",
        input: {
            name: "middleName",
            type: "text",
            options: {
                required: false,
            },
        },
    },
];