import formStyles from "@/shared/styles/components/FormStyles.module.scss";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { FormField } from "@/pages/signin/ui/FormField.tsx";
import { Button } from "@/shared/ui/Button.tsx";

export const SignUpForm = () => {

    const signUpSchema = z.object({
        firstName: z.string().min(2, "Firstname must be at least 2 characters"),
        lastName: z.string().min(2, "Lastname must be at least 2 characters"),
        email: z.string().email("Invalid email"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string().min(8),

    }).refine((data) => data.password === data.confirmPassword, {
        message: "Password do not match",
        path: [ "confirmPassword" ],
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signUpSchema),
    });

    const signUp = (data: any) => {
        console.log(data)

        fetch("http://localhost:3000/auth/registration", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),

        }).then(response => {
            return response.json();

        }).then(response => {
            console.log(response);
        })
    };

    return (
        <form onSubmit={ handleSubmit(signUp) } className={ formStyles.form }>
            <header className={ formStyles.header }>
                <h2 className={ formStyles.title }>Register</h2>
                <p className={ formStyles.subtitle }>Enter your details to create a new account</p>
            </header>

            <FormField
                { ...register("firstName") }
                error={ errors.firstName }
                variant="inputReg"
                id="Firstname"
                label="Firstname"
                placeholder="Choose a firstname"
            />
            <FormField
                { ...register("lastName") }
                error={ errors.lastName }
                variant="inputReg"
                id="Lastname"
                label="Lastname"
                placeholder="Choose a lastname"
            />
            <FormField
                { ...register("email") }
                error={ errors.email }
                variant="inputReg"
                id="Email"
                label="Email"
                placeholder="Enter your email"
            />
            <FormField
                { ...register("password") }
                error={ errors.password }
                variant="inputReg"
                id="Password"
                label="Password"
                placeholder="Create a password"
                type="password"
            />
            <FormField
                { ...register("confirmPassword") }
                error={ errors.confirmPassword }
                variant="inputReg"
                id="Confirm Password"
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
            />

            <Button variant="signInBtn">Register</Button>
        </form>
    );
};