import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routeConfig } from "@/shared/config/router";

export const AppRouter = () => {
    const routes = useRoutes(routeConfig);

    return (
        <Suspense fallback={ <div>Loading...</div> }>
            { routes }
        </Suspense>
    );
};
