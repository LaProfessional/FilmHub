export interface ICandidate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserTokens {
  refreshToken: string;
  accessToken: string;
}