import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import styles from "./auth.module.scss"
import titleStyles from "@/shared/styles/components/TitleStyles.module.scss"

import { SignIn, SignUp } from "@/features/auth"
import { Button } from "@/shared/ui"

import { LOCAL_STORAGE_USER_TOKEN_KEY } from "@/shared/const/localStorage"

export const Auth = () => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const navigate = useNavigate()
  const toggleModal = () => setIsActive(!isActive)

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY)
    if (token) navigate("/home")
  }, [])

  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <h2 className={titleStyles.titleGradient}>FilmHub</h2>
        <p className={styles.subtitle}>Your personal movie platform</p>

        <div className={styles.containerBtns}>
          <Button onClick={toggleModal} isActive={isActive} variant={"regBtn"}>
            Login
          </Button>

          <Button onClick={toggleModal} isActive={!isActive} variant={"regBtn"}>
            Register
          </Button>
        </div>

        {isActive ? <SignIn /> : <SignUp />}
      </div>
    </div>
  )
}
