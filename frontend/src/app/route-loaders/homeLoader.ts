import { type LoaderFunctionArgs } from "react-router-dom";

export default async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const movieName = url.searchParams.get("search");
  console.log("home loader");
  console.log(movieName);
};
