import { Suspense } from "react";
import { RouterProvider } from "react-router";

import { Loading } from "@/widgets/loading";
import { router } from "./router";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
