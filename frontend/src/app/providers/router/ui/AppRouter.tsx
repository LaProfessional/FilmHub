import { Suspense } from "react";
import { RouterProvider } from "react-router";

import { Loading } from "@/widgets/loading";
import { route } from "../model/route";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={route} />
    </Suspense>
  );
};
