import { http, HttpResponse, delay } from "msw";
import type {
  AuthUserRegisterData,
  AuthApiRegisterResponse,
  AuthUserLoginData,
  AuthApiLoginResponse,
} from "@/features/auth";
import { users, sessions } from "./users";

// TODO: более реалистичное поведение?
// TODO: возможно стоит писать моки рядом с апи слайсами

export const handlers = [
  http.all("*", async () => await delay(777)),

  http.post<never, AuthUserRegisterData, AuthApiRegisterResponse>(
    "/api/auth/register",
    async ({ request }) => {
      const body = await request.json();

      const { accessToken, refreshToken } = createTokens();
      const userId = crypto.randomUUID();

      const user = {
        userId,
        ...body,
      };

      sessions[accessToken] = user;
      users[body.email] = user;

      return HttpResponse.json({
        accessToken,
        refreshToken,
        userId,
      });
    },
  ),

  http.post<never, AuthUserLoginData, AuthApiLoginResponse | { error: string }>(
    "/api/auth/login",
    async ({ request }) => {
      const body = await request.json();
      const user = users[body.email];

      if (!user || user.password !== body.password) {
        return HttpResponse.json({ error: "Invalid email or password" }, { status: 403 });
      }

      const { accessToken, refreshToken } = createTokens();

      sessions[accessToken] = user;

      return HttpResponse.json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        userId: user.userId,
      });
    },
  ),

  http.post("/api/auth/logout", ({ request }) => {
    const authHeader = request.headers.get("authorization");
    const accessToken = authHeader?.split(" ")[1];

    if (accessToken) {
      // eslint-disable-next-line
      delete sessions[accessToken];
    }

    return HttpResponse.json({ message: "Success" });
  }),
];

function createTokens() {
  return {
    accessToken: crypto.randomUUID(),
    refreshToken: crypto.randomUUID(),
  };
}
