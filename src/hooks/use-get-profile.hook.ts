import { GET_PROFILE_KEY } from "@/constants/queries.constant";
import { authenticationService } from "@/services/authentication.service";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
    return useQuery({
        queryKey: [GET_PROFILE_KEY],
        queryFn: authenticationService.getProfile,
        retry: false
    });
};