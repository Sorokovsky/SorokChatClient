import { TUser } from "./user.type";

export type TRegistrationDto = Pick<TUser, 'email'> & {
    password: string;
};