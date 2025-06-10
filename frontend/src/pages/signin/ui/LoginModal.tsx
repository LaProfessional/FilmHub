import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LoginModal.module.scss";
import titleStyles from "@/shared/styles/components/TitleStyles.module.scss"

import { Button } from "@/shared/ui/Button/Button.tsx";
import { SignInForm } from "@/features/login/api/SignInForm.tsx";
import { SignUpForm } from "@/features/registration/ui/SignUpForm.tsx";

export const LoginModal = () => {
    const [ isActive, setIsActive ] = useState<Boolean>(true);
    const navigate = useNavigate();
    const toggleModal = () => setIsActive(!isActive);

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token) navigate("/home");
    }, []);

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