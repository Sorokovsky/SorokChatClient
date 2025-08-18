import type { CreateUserPayload } from '@/contracts/user/create-user.contract';
export type LoginUserPayload = Pick<CreateUserPayload, "email" | "password">;