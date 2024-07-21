import { TRegistrationDto } from "./registration.type";

export type TLoginDto = Pick<TRegistrationDto, 'email' | 'password'>;