import formStyles from "@/shared/styles/components/FormStyles.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/features/login/model/validation.ts";
import { useSignIn } from "@/features/login/model/services.ts";

import { FormField } from "@/pages/signin/ui/FormField.tsx";
import { Button } from "@/shared/ui/Button.tsx";

export const SignInForm = () => {
    const { signIn } = useSignIn();

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = (data: any) => signIn(data, setError)

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className={ formStyles.form }>
            <header className={ formStyles.header }>
                <h2 className={ formStyles.title }>Login</h2>
                <p className={ formStyles.subtitle }>Enter your credentials to access your account</p>
            </header>

            <FormField
                { ...register("email") }
                error={ errors.email }
                variant={ "inputReg" }
                id="Email"
                label="Email"
                placeholder="Enter your email"
                type="text"
            />

            <FormField
                { ...register("password") }
                error={ errors.password }
                variant={ "inputReg" }
                id="Email"
                label="Password"
                placeholder="Enter your password"
                type="text"
            />

            <Button variant={ "signInBtn" }>Login</Button>
        </form>
    );
};



