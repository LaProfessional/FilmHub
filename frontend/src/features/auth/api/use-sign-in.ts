import api from "@/shared/api"
import { useAuth } from "@/app/providers/auth"

export const useSignIn = () => {
  const { login } = useAuth()

  const signIn = (data: any, setError: any) => {
    const { email, password } = data

    api
      .post(`/auth/login`, { email, password })
      .then(response => {
        const token = response.data.dataValues.token
        login(token)
      })
      .catch((error: any) => {
        const detailMsg = error.response?.data?.detail
        const dataConfig = JSON.parse(error.config?.data)

        if (detailMsg.includes(`Пользователь с email '${dataConfig.email}' не найден!`)) {
          return setError("email", {
            type: "server",
            message: `Пользователь с email '${dataConfig.email}' не найден!`,
          })
        }

        if (detailMsg.includes(`Не верный пароль!`)) {
          return setError("password", {
            type: "server",
            message: `Не верный пароль!`,
          })
        }

        return console.error("Login failed", error)
      })
  }
  return { signIn }
}
