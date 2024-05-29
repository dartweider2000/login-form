import type { FetchOptions } from "ofetch";
import { $fetch } from "ofetch";
import AuthApi from "~/api/modules/auth.api";
import type { IApi } from "~/type/UI";

export const useApiStore = defineStore("apiStore", () => {
  const {
    public: { apiUrl },
  } = useRuntimeConfig();
  const fetchOptions: FetchOptions = {
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetcher = $fetch.create(fetchOptions);

  const api: IApi = {
    auth: new AuthApi(fetcher),
  };

  return { ...api };
});
