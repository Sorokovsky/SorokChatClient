import { IField } from "@/constants/forms/form.interface";
import { useAvatar } from "@/hooks/useAvatar";
import { TUser } from "@/types/user.type";

export const prepareUserToFields = (user: TUser | null): IField[] => {
    if(user === null) return [];
    const defaultAvatar = "https://static-00.iconduck.com/assets.00/user-avatar-icon-2048x2048-wpp8os2d.png";
    const avatar = (user.avatarPath.trim() !== '' && user.avatarPath !== undefined) ? user.avatarPath : defaultAvatar;
    let keys: (keyof TUser)[] = Object.keys(user) as (keyof TUser)[];
    keys = keys.filter(key => key !== 'avatarPath' && key !== 'createdAt' && key !== 'updatedAt' && key !== 'id');
    return [...keys.map(key => ({
        slug: key,
        placeholder: key!,
        defaultValue: user[key]!,
        type: 'text',
    })), {
        placeholder: "",
        slug: 'avatar',
        type: "file",
        image: useAvatar(avatar),
    },];
}