import axios from "axios";
import { useSignIn } from "@/features/login/model/services.ts";

export const useSignUp = () => {
    const { signIn } = useSignIn();

    const signUp = (data: any, setError: any) => {
        axios.post(`${ import.meta.env.VITE_API_URL }/auth/registration`, data)
            .then(() => {
                signIn(data, setError);
            })
            .catch(error => {
                const detailMsg = error.response.data.detail;

                if (detailMsg?.includes("уже существует")) {
                    setError("email", {
                        type: "server",
                        message: "This email already exists",
                    });

                } else {
                    console.error("Registration failed", error);
                }
            });
    };
    return { signUp };
};