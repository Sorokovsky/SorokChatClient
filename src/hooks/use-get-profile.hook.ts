import { RETRY_COUNT } from "@/constants/api.constant";
import { GET_PROFILE_KEY } from "@/constants/queries.constant";
import { authenticationService } from "@/services/authentication.service";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => useQuery({
    queryKey: [GET_PROFILE_KEY],
    queryFn: authenticationService.getProfile,
    retry: RETRY_COUNT
});