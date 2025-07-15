import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { baseApiSlice } from "@/shared/api";
import { authSlice } from "@/features/auth";
import { currentUserSlice } from "@/entities/current-user";

const rootReducer = combineSlices(baseApiSlice, authSlice, currentUserSlice);

export type RootState = ReturnType<typeof rootReducer>;

export function makeStore(preloadedState?: RootState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlewares) => {
      return getDefaultMiddlewares().concat(baseApiSlice.middleware);
    },
    preloadedState,
  });

  setupListeners(store.dispatch);

  return store;
}

export const store = makeStore();
export type AppDispatch = typeof store.dispatch;
