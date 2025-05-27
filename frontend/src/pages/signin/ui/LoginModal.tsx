import styles from "./LoginModal.module.scss";
import titleStyles from "@/shared/styles/components/TitleStyles.module.scss"

import { Button } from "@/shared/ui/Button.tsx";
import { SignInForm } from "@/features/login/ui/SignInForm.tsx";
// import { SignUpForm } from "@/features/registration/ui/SignUpForm.tsx";

export const LoginModal = () => {

    return (
        <div className={ styles.modal }>
            <div className={ styles.modalWrapper }>
                <h2 className={ titleStyles.titleGradient }>FilmHub</h2>
                <p className={ styles.subtitle }>Your personal movie platform</p>

                <div className={ styles.containerBtns }>
                    <Button variant={ "regBtn" } isActive={ true }>Login</Button>
                    <Button variant={ "regBtn" }>Register</Button>
                </div>

                <SignInForm />
            </div>
        </div>
    );
};