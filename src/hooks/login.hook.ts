import { RETRY_COUNT } from "@/constants/api.constant";
import { LOGIN_KEY } from "@/constants/queries.constant";
import { authenticationService } from "@/services/authentication.service";
import { useMutation } from "@tanstack/react-query";
import type { LoginUserPayload } from '../contracts/user/login-user.contract';

export const useLogin = () => useMutation({
    mutationKey: [LOGIN_KEY],
    mutationFn: async (payload: LoginUserPayload) => await authenticationService.login(payload),
    retry: RETRY_COUNT
});