import formStyles from "@/shared/styles/components/FormStyles.module.scss";

import { FormField } from "@/pages/signin/ui/FormField.tsx";
import { Button } from "@/shared/ui/Button.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema } from "@/features/registration/model/validation.ts";
import { signUp } from "@/features/registration/model/services.ts";

export const SignUpForm = () => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = (data: any) => signUp(data, setError)

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className={ formStyles.form }>
            <header className={ formStyles.header }>
                <h2 className={ formStyles.title }>Register</h2>
                <p className={ formStyles.subtitle }>Enter your details to create a new account</p>
            </header>

            <FormField
                { ...register("firstName") }
                error={ errors.firstName }
                variant="inputReg"
                id="First name"
                label="First name"
                placeholder="Choose a firstname"
            />
            <FormField
                { ...register("lastName") }
                error={ errors.lastName }
                variant="inputReg"
                id="Last name"
                label="Last name"
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