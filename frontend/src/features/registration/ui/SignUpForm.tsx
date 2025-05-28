import formStyles from "@/shared/styles/components/FormStyles.module.scss";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { FormField } from "@/pages/signin/ui/FormField.tsx";
import { Button } from "@/shared/ui/Button.tsx";

export const SignUpForm = () => {

    const signUpSchema = z.object({
        firstname: z.string().min(2, "Firstname must be at least 2 characters"),
        lastname: z.string().min(2, "Lastname must be at least 2 characters"),
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

    const onSubmit = () => {
        console.log(signUpSchema);
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className={ formStyles.form }>
            <header className={ formStyles.header }>
                <h2 className={ formStyles.title }>Register</h2>
                <p className={ formStyles.subtitle }>Enter your details to create a new account</p>
            </header>

            <FormField
                { ...register("firstname") }
                error={ errors.firstname }
                variant="inputReg"
                id="Firstname"
                label="Firstname"
                placeholder="Choose a firstname"
            />
            <FormField
                variant="inputReg"
                id="Lastname"
                label="Lastname"
                placeholder="Choose a lastname"
            />
            <FormField
                variant="inputReg"
                id="Email"
                label="Email"
                placeholder="Enter your email"
            />
            <FormField
                variant="inputReg"
                id="Password"
                label="Password"
                placeholder="Create a password"
                type="password"
            />
            <FormField
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