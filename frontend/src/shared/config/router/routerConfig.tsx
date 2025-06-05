import { HomePage } from "@/pages/home";
import { RootLayout } from "@/shared/layout/ui/RootLayout";
import { Navigate, type RouteObject } from "react-router-dom";

export const routeConfig: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/home" replace />,
    },
    // {
    //     path: "/auth",
    //     element: <LoginModal />,
    // },
    {
        path: "/home",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
];
