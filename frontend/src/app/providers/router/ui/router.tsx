import { Routes, Route } from "react-router-dom";
import { routeConfig} from "@/shared/config/router";
import { Suspense } from "react";
import { RootLayout, RootLayoutWithoutSidebar } from "@/shared/layout";

export const AppRouter = () => {
    return (
        <Suspense fallback={ <div>Loading...</div> }>

            <Routes>
                <Route path="/" element={<RootLayoutWithoutSidebar/>}>
                    <Route path={routeConfig.profile.path} element={routeConfig.profile.element}></Route>
                </Route>

                <Route path="/" element={<RootLayout />}>
                { Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={ path } path={ path } element={ element }/>
                )) }
                </Route>

            </Routes>


            
        </Suspense>
    );
};
