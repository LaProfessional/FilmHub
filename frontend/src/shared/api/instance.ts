import { PUBLIC_API_URL } from "@/shared/const/vars"
import axios from "axios"

export const $api = axios.create({
  baseURL: PUBLIC_API_URL,
})
