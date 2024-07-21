import { TUser } from "@/types/user.type";

export interface IUser {
    user: TUser | null;
    accessToken: string | null;
    error: string | null;
    isLoading: boolean;
};