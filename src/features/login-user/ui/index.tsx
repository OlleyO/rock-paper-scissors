import Button from "@/widgets/button";
import Input from "@/widgets/input";

import { loginUserModel } from "..";
import { userModel } from "@/entities/user";

import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export const UserLoginForm: React.FC = () => {
  const router = useRouter();

  const usernameQuery = userModel.selectors.useUsernameQuery();

  return (
    <div>
      <form className={styles.form}>
        <Input
          type="text"
          onChange={(e) => userModel.usernameQueryChanged(e.target.value)}
        />
        <Button
          className={styles.submitButton}
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            loginUserModel.effects
              .loginUserFx(usernameQuery)
              .then(() => router.push("/"));
          }}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};
