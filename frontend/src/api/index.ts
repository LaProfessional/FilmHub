import axios from "axios";
import {createApi} from "./auth.ts";

export const api = () => {
  const axios = axios.create()

  const api = { auth: createApi(api) }

  axios.interceptors.response.use(function (response) {
    // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
    // Здесь можете сделать что-нибудь с ответом
    return response;
  }, function (error) {
    // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
    // Здесь можете сделать что-то с ошибкой ответа
    if (error.status === 401 && error.statusMessage = 'Unauthorized') {
      api.auth.updateToken()
    }
    return Promise.reject(error);
  });

  return out
}