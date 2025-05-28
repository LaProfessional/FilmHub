import formStyles from "@/shared/styles/components/FormStyles.module.scss";

import { FormField } from "@/pages/signin/ui/FormField.tsx";
import { Button } from "@/shared/ui/Button.tsx";


export const SignUpForm = () => {
    return (
        <form className={ formStyles.form }>
            <header className={ formStyles.header }>
                <h2 className={ formStyles.title }>Register</h2>
                <p className={ formStyles.subtitle }>Enter your details to create a new account</p>
            </header>

            <FormField
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