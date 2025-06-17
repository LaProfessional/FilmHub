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
      .catch(error => {
        const detailMsg = error.response.data.detail

        if (detailMsg?.includes("уже существует")) {
          setError("email", {
            type: "server",
            message: "This email already exists",
          })
        } else {
          console.error("Registration failed", error)
        }
      })
  }
  return { signUp }
}
