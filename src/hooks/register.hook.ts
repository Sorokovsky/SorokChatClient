import { RETRY_COUNT } from '@/constants/api.constant';
import { REGISTER_KEY } from '@/constants/queries.constant';
import type { CreateUserPayload } from '@/contracts/user/create-user.contract';
import { authenticationService } from '@/services/authentication.service';
import { useMutation } from '@tanstack/react-query';
export const useRegister = () => useMutation({
    mutationKey: [REGISTER_KEY],
    mutationFn: async (payload: CreateUserPayload) => await authenticationService.register(payload),
    retry: RETRY_COUNT
});