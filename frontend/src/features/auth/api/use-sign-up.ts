import { useSignIn } from "./use-sign-in"
import api from "@/shared/api"

export const useSignUp = () => {
  const { signIn } = useSignIn()

  const signUp = (data: any, setError: any) => {
    api
      .post(`/auth/registration`, data)
      .then(() => {
        signIn(data, setError)
      })
      .catch((error: any) => {
        const detailMsg = error.response?.data?.detail
        const dataConfig = JSON.parse(error.config?.data)
        console.log(error.response); // data: ""
        if (detailMsg.includes(`Пользователь с email '${dataConfig.email}' уже существует!`)) {
          return setError("email", {
            type: "server",
            message: `Пользователь с email '${dataConfig.email}' уже существует!`,
          })
        }

        return console.error("Registration failed", error)
      })
  }
  return { signUp }
}
