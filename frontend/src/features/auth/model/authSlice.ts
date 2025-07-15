import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthCredentials } from "../api/types";

export type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
  isLoggingOut: boolean;
  isRefreshingToken: boolean;
  error: string | null;
};

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  userId: null,
  isLoggingOut: false,
  isRefreshingToken: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthCredentials>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userId = action.payload.userId;
    },
    startLogout: (state) => {
      state.isLoggingOut = true;
    },
    completeLogout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.userId = null;
      state.isLoggingOut = false;
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  selectors: {
    selectIsAuthenticated: (state) => !!state.userId,
    selectUserId: (state) => state.userId,
  },
});

export const { setCredentials, startLogout, completeLogout, setAuthError } = authSlice.actions;
export const { selectIsAuthenticated, selectUserId } = authSlice.selectors;
