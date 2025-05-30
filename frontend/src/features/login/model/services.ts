import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
    const navigate = useNavigate();

    const signIn = (data: any, setError: any) => {
        const { email, password } = data;

        axios.post("http://localhost:3000/auth/login", { email, password })
            .then(response => {
                const token = response.data.dataValues.token;
                localStorage.setItem("userToken", token);
                navigate("/");
            })
            .catch(error => {
                const detailMsg = error.response.data.detail;

                if (detailMsg.includes("Не верный пароль!")) {
                    setError("password", {
                        type: "server",
                        message: "Invalid password",
                    });
                }
            });
    };
    return { signIn };
};