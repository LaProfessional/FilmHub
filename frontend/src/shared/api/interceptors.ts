import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

import { getAccessToken, removeAccessToken, setAccessToken } from "@/shared/lib/token-storage";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;

let failedQueue: (() => void)[] = [];
const processQueue = () => {
  failedQueue.forEach((cb) => cb());
  failedQueue = [];
};

export const setupInterceptors = (api: AxiosInstance): void => {
  api.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    // @ts-ignore
    async (error: AxiosError) => {
      const originalRequest = error.config as CustomAxiosRequestConfig;
      if (
        !originalRequest
        || originalRequest.url === "/auth/login"
        || originalRequest.url === "/auth/registration"
      ) {
        return Promise.reject(error);
      }

      if (error.response?.status === 401 && !originalRequest?._retry && !isRefreshing) {
        isRefreshing = true;

        try {
          const refreshResponse = await api.post("/auth/token");
          const newToken = refreshResponse.data.token;

          api.defaults.headers.common.Authorization = `Bearer ${newToken}`;
          setAccessToken(newToken);

          processQueue();
          return api(originalRequest);
        } catch (error) {
          removeAccessToken();
          return Promise.reject(error);
        } finally {
          isRefreshing = false;
        }
      } else {
        failedQueue.push(() => api(originalRequest));
      }
    },
  );
};
