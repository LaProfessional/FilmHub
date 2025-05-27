import { HomePage } from "@/pages/home";
import { LoginModal } from "@/pages/signin/ui/LoginModal.tsx";
import { RootLayout } from "@/shared/layout/ui/RootLayout";
import type { RouteObject } from "react-router-dom";

export const routeConfig: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
    {
        path: "/auth",
        element: <LoginModal />,
    },
];