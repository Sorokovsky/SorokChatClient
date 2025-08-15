import type { GetUserPayload } from "@/contracts/user/get-user.contract";
import { httpClient } from "@/http/client";

class AuthenticationService {

    public async getProfile(): Promise<GetUserPayload> {
        const response = await httpClient.get<GetUserPayload>("/authentication/get-me");
        return response.data;
    }
};
export const authenticationService = new AuthenticationService();