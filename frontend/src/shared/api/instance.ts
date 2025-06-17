import axios from "axios"

import { setupInterceptors } from "@/shared/api/interceptors"
import { PUBLIC_API_URL } from "@/shared/const/vars"

const api = axios.create({
  baseURL: PUBLIC_API_URL,
  withCredentials: true,
})

setupInterceptors(api)

export default api
