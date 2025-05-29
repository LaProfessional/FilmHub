import axios from "axios";

export const signIn = (data: any) => {
    const { email, password } = data;

    axios.post("http://localhost:3000/auth/login", { email, password })
        .then(response => {
            const token = response.data.dataValues.token;
            localStorage.setItem("userToken", token);
        });
};