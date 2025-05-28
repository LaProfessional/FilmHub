import styles from "./LoginModal.module.scss";
import titleStyles from "@/shared/styles/components/TitleStyles.module.scss"
// import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/Button.tsx";
import { SignInForm } from "@/features/login/ui/SignInForm.tsx";
import { useState } from "react";
import { SignUpForm } from "@/features/registration/ui/SignUpForm.tsx";

export const LoginModal = () => {
    const [ isActive, setIsActive ] = useState<Boolean>(true);

    const toggleModal = () => setIsActive(!isActive);



    return (
        <div className={ styles.modal }>
            <div className={ styles.modalWrapper }>
                <h2 className={ titleStyles.titleGradient }>FilmHub</h2>
                <p className={ styles.subtitle }>Your personal movie platform</p>

                <div className={ styles.containerBtns }>
                    <Button
                        onClick={ toggleModal }
                        isActive={ isActive }
                        variant={ "regBtn" }
                    >Login</Button>

                    <Button
                        onClick={ toggleModal }
                        isActive={ !isActive }
                        variant={ "regBtn" }
                    >Register</Button>
                </div>

                { isActive ? <SignInForm/> : <SignUpForm/> }
            </div>
        </div>
    );
};