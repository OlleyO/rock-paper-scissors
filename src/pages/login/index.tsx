import { UserLoginForm } from "@/features/login-user";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "./styles.module.scss";

const Login: NextPage = () => {
  return (
    <main className={styles.page}>
      <h1>Login</h1>
      <UserLoginForm />
    </main>
  );
};

export default Login;
