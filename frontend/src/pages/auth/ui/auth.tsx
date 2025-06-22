import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import styles from "./auth.module.scss"
import titleStyles from "@/shared/styles/components/TitleStyles.module.scss"

import { SignIn, SignUp } from "@/features/auth"
import { Button } from "@/shared/ui"
import { getAccessToken } from "@/shared/lib/token-storage"
import { useAuth } from "@/app/providers/auth"
import { RoutePath } from "@/app/providers/router"

export const Auth = () => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const { isAuth } = useAuth()

  const toggleModal = () => {
    setIsActive(!isActive)
  }

  if (isAuth) {
    return <Navigate to={RoutePath.ROOT} />
  }

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
