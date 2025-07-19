import axios from 'axios'
import { createApi } from './auth.ts'
import { createApi as createMovieApi } from './movie.ts'

export const api = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/api/',
  })

  const api = { auth: createApi(axiosInstance), movie: createMovieApi(axiosInstance) }

  axiosInstance.interceptors.response.use(function(response) {
    // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
    // Здесь можете сделать что-нибудь с ответом
    return response
  }, function(error) {
    // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
    // Здесь можете сделать что-то с ошибкой ответа
    if (error.status === 401 && error.statusMessage === 'Unauthorized') {
      api.auth.updateToken()
    }
    return Promise.reject(error)
  })

  return api
}
