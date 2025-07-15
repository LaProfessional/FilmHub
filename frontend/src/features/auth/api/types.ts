// TODO: нет уверенности на счет именований

export type AuthCredentials = {
  accessToken: string;
  refreshToken: string;
  userId: string;
};

export type AuthApiRegisterResponse = AuthCredentials;
export type AuthApiLoginResponse = AuthCredentials;

export type AuthUserRegisterData = {
  username: string;
  email: string;
  password: string;
};

export type AuthUserLoginData = {
  email: string;
  password: string;
};
