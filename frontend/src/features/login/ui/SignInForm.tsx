import formStyles from "@/shared/styles/components/FormStyles.module.scss";

import { FormField } from "@/pages/signin/ui/FormField.tsx";
import { Button } from "@/shared/ui/Button.tsx";

export const SignInForm = () => {
    return (
        <form className={ formStyles.form }>
            <header className={ formStyles.header }>
                <h2 className={ formStyles.title }>Login</h2>
                <p className={ formStyles.subtitle }>Enter your credentials to access your account</p>
            </header>

            <FormField
                variant={ "inputReg" }
                id="Email"
                label="Email"
                placeholder="Enter your email"
                type="text"
            />

            <FormField
                variant={ "inputReg" }
                id="Email"
                label="Password"
                placeholder="Enter your password"
                type="text"
            />

            <Button variant={ "signInBtn" }>Login</Button>
        </form>
    )
};



