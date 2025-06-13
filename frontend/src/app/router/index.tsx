import { routeConfig } from "@/shared/config/router";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routeConfig);

export default function () {
  return <RouterProvider router={router} />;
}
