export enum AppRoutes {
  HOME = "HOME",
  AUTH = "AUTH",
  NOT_FOUND = "NOT_FOUND",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.AUTH]: "/auth",
  [AppRoutes.NOT_FOUND]: "*",
}
