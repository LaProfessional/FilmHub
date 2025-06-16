import axios from "axios"

import { useNavigate } from "react-router-dom"
import { LOCAL_STORAGE_USER_TOKEN_KEY } from "@/shared/const/localStorage.ts"

export const useSignIn = () => {
  const navigate = useNavigate()

  const signIn = (data: any, setError: any) => {
    const { email, password } = data

    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/login`, { email, password })
      .then(response => {
        const token = response.data.dataValues.token
        localStorage.setItem(LOCAL_STORAGE_USER_TOKEN_KEY, token)
        navigate("/")
      })
      .catch(error => {
        const detailMsg = error.response.data.detail

        if (detailMsg.includes("Не верный пароль!")) {
          setError("password", {
            type: "server",
            message: "Invalid password",
          })
        }
      })
  }
  return { signIn }
}
