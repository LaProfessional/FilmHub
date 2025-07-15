import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/shared/types";

export type CurrentUserState = {
  user: User | null;
  settings: object;
  error: string | null;
};

const initialState: CurrentUserState = {
  user: null,
  settings: {},
  error: null,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    // DODO: -_-
    clearCurrentUser: () => initialState,
    setCurrentUserError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  selectors: {
    selectUserInfo: (state) => state.user,
  },
});

export const { setCurrentUser, clearCurrentUser, setCurrentUserError } = currentUserSlice.actions;
export const { selectUserInfo } = currentUserSlice.selectors;
