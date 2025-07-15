import { delay, http, HttpResponse } from "msw";
import type { User } from "@/shared/types";
import { sessions } from "./users";

export const handlers = [
  http.all("*", async () => await delay(1000)),

  http.get<never, never, User | { error: string }>("/api/profile/me", async ({ request }) => {
    const authHeader = request.headers.get("authorization");
    const accessToken = authHeader?.split(" ")[1];

    if (!accessToken) {
      return HttpResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const user = sessions[accessToken];

    if (!user) {
      return HttpResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    return HttpResponse.json({
      id: user.userId,
      username: user.username,
      email: user.email,
    });
  }),
];
