import { useNavigate } from "react-router-dom"

import api from "@/shared/api"
import { setAccessToken } from "@/shared/lib/token-storage"

export const useSignIn = () => {
  const navigate = useNavigate()

  const signIn = (data: any, setError: any) => {
    const { email, password } = data

    api
      .post(`/auth/login`, { email, password })
      .then(response => {
        const token = response.data.dataValues.token
        setAccessToken(token)
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
