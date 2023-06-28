import type { CurrentUser } from "~~/types/user.type"

type UseApiFetchOptions = {
    method?: string;
    body?: Record<string, any>;
}
export const useApiFetch = <T>(
    api: string | (() => string),
    options?: UseApiFetchOptions 
) =>{
    const {
        public: { apiBaseUrl }
    } = useRuntimeConfig();

    const CurrentUser = useState<CurrentUser>('currentUser');
    return useFetch<T>(api, {
        baseURL: apiBaseUrl,
        onRequest: async (context) => {
            if (CurrentUser.value) {
                context.options.headers = {
                    Authorization: `Bearer ${CurrentUser.value.token}`
                }
            }
        },
        ...options
    })
}