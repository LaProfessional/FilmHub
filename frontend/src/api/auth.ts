import type { Axios } from "axios";

interface ILogin {
  email: string;
  password: string;
}

interface IRegister {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

export const createApi = (axios: Axios) => {
  const login = (body: ILogin) => {
    return axios.post("/api/v1/login", body);
  };

  const registration = (body: IRegister) => {
    return axios.post("/api/v1/registration", body);
  };

  const updateToken = () => {
    return axios.post("/api/v1/token", {});
  };

  return { login, registration, updateToken };
};
