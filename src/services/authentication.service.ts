import type { GetUserPayload } from "@/contracts/user/get-user.contract";
import { httpClient } from "@/http/client";
import type { CreateUserPayload } from '../contracts/user/create-user.contract';
import type { LoginUserPayload } from '../contracts/user/login-user.contract';

class AuthenticationService {
    public async getProfile(): Promise<GetUserPayload> {
        const response = await httpClient.get<GetUserPayload>("/authentication/get-me");
        return response.data;
    }

    public async logout(): Promise<void> {
        await httpClient.delete<void>("/authentication/logout");
    }

    public async register(payload: CreateUserPayload): Promise<GetUserPayload> {
        const response = await httpClient.post("/authentication/register", {
            body: payload
        });
        return response.data;
    }

    public async login(payload: LoginUserPayload): Promise<GetUserPayload> {
        const response = await httpClient.put("/authentication/login", {
            body: payload
        });
        return response.data;
    }
};
export const authenticationService = new AuthenticationService();