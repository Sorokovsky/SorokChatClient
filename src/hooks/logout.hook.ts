import { RETRY_COUNT } from "@/constants/api.constant";
import { LOGOUT_KEY } from "@/constants/queries.constant";
import { authenticationService } from "@/services/authentication.service";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () => useMutation({
    mutationFn: authenticationService.logout,
    mutationKey: [LOGOUT_KEY],
    retry: RETRY_COUNT,
});