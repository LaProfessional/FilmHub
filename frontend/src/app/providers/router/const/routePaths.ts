export enum AppRoutes {
  ROOT = "ROOT",
  AUTH = "AUTH",
  NOT_FOUND = "NOT_FOUND",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]: "/",
  [AppRoutes.AUTH]: "/auth",
  [AppRoutes.NOT_FOUND]: "*",
};
