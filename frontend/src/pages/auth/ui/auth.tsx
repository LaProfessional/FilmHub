import { useState } from "react";
import { Navigate } from "react-router";

// import styles from "./auth.module.scss";
// import titleStyles from "@/shared/styles/components/TitleStyles.module.scss";

import { SignIn, SignUp } from "@/features/auth";
import { Button } from "@/shared/ui";
import { useAuth } from "@/app/providers/auth";
import { RoutePath } from "@/app/providers/router";

export const Auth = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const { isAuth } = useAuth();

  const toggleModal = () => {
    setIsActive(!isActive);
  };

  if (isAuth) {
    return <Navigate to={RoutePath.ROOT} />;
  }

  return (
    <div className="">
      <div className="">
        <h2 className="">FilmHub</h2>
        <p className="">Your personal movie platform</p>

        <div className="">
          <Button onClick={toggleModal}>Login</Button>

          <Button onClick={toggleModal}>Register</Button>
        </div>

        {isActive ?
          <SignIn />
        : <SignUp />}
      </div>
    </div>
  );
};
