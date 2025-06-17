import { $api } from "./instance"

$api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  },
)
