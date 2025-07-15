export type UserData = {
  userId: string;
  username: string;
  email: string;
  password: string;
};

// сделаем вид что jwt это просто id сессии
export const sessions: Record<string, UserData> = {};

export const users: Record<string, UserData> = {
  "let@me.in": {
    userId: "1234",
    username: "coraline",
    email: "let@me.in",
    password: "1234qwer",
  },
};
