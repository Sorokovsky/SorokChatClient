import { TUser } from "./user.type";

export type TUpdateUser = Partial<Omit<TUser, 'createdAt' | 'updatedAt' | 'id' | 'avatarPath'>> & {
    avatar?: FileList
};