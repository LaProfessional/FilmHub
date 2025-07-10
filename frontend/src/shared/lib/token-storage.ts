import { LOCAL_STORAGE_USER_TOKEN_KEY } from "@/shared/const/vars";

export const getAccessToken = (): string | null => {
  return localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY);
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem(LOCAL_STORAGE_USER_TOKEN_KEY, token);
};

export const removeAccessToken = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_USER_TOKEN_KEY);
};
