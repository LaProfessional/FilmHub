import { type RouteProps } from "react-router-dom";

// PAGES
import { HomePage } from "@/pages/home";
import { ProfilePage } from "@/pages/profile";

export enum AppRoutes {
    HOME = "home",
    PROFILE = "profile",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.PROFILE]:"/profile"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath[AppRoutes.HOME],
        element: <HomePage/>,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfilePage/>
    }
};
