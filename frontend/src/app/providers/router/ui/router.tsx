import { Routes, Route } from "react-router-dom";
import { routeConfig } from "@/shared/config/router";
import { Suspense } from "react";

export const AppRouter = () => {
    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <Routes>
                { Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={ path } path={ path } element={ element }/>
                )) }
            </Routes>
        </Suspense>
    );
};
