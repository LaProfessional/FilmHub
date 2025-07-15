import { baseApiSlice } from "@/shared/api";
import { currentUserApiSlice, currentUserSlice } from "@/entities/current-user";
import { setCredentials, startLogout, completeLogout, setAuthError } from "../model/authSlice";
import type {
  AuthApiRegisterResponse,
  AuthApiLoginResponse,
  AuthUserRegisterData,
  AuthUserLoginData,
} from "./types";

export const authApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<AuthApiRegisterResponse, AuthUserRegisterData>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<AuthApiLoginResponse, AuthUserLoginData>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
          dispatch(currentUserApiSlice.endpoints.getCurrentUser.initiate());
        } catch (error) {
          if (error instanceof Error) {
            dispatch(setAuthError(error.message));
          } else {
            // TODO
            throw error;
          }
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      // TODO: have no idea what im doing ;)
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          dispatch(startLogout());
          await queryFulfilled;
          dispatch(completeLogout());
          dispatch(currentUserSlice.actions.clearCurrentUser());
        } catch {
          // TODO: catch
        }
      },
    }),

    // TODO
    // refreshToken:
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApiSlice;
