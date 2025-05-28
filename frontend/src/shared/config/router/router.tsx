import { type RouteProps } from "react-router-dom";

// PAGES
import { HomePage } from "@/pages/home";

export enum AppRoutes {
    HOME = "home",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath[AppRoutes.HOME],
        element: <HomePage/>,
    },
};
