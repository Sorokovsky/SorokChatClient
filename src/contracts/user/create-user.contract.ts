import type { GetUserPayload } from "./get-user.contract";

export type CreateUserPayload = Partial<Omit<GetUserPayload, "id" | "createdAt" | "updatedAt" | "email">>
    & Pick<GetUserPayload, "email"> & {
        password: string;
};