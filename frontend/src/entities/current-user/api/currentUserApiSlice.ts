import { baseApiSlice } from "@/shared/api";
import type { User } from "@/shared/types";
import { setCurrentUser, setCurrentUserError } from "../model/currentUserSlice";

// TODO: выглядит плохо :)

export const currentUserApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query<User, void>({
      query: () => "/profile/me",
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data));
        } catch (error) {
          if (error instanceof Error) {
            setCurrentUserError(error.message);
          }
        }
      },
      providesTags: ["CurrentUser"],
    }),
    updateCurrentUser: build.mutation<User, Partial<User>>({
      query: (body) => ({
        url: "/profile/me",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["CurrentUser"],
      onQueryStarted: async (patch, { dispatch, queryFulfilled }) => {
        const updateResult = dispatch(
          currentUserApiSlice.util.updateQueryData("getCurrentUser", undefined, (draft) => {
            Object.assign(draft, patch);
          }),
        );
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data));
        } catch (error) {
          if (error instanceof Error) {
            setCurrentUserError(error.message);
          }
          updateResult.undo();
        }
      },
    }),
    // TODO: implement
    deleteCurrentUser: build.mutation<undefined, { passwod: string }>({
      query: (body) => ({
        url: "/me",
        method: "DELETE",
        body,
      }),
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
  useDeleteCurrentUserMutation,
} = currentUserApiSlice;
