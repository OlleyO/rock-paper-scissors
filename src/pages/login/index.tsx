import { NextPage } from "next";

import { UserLoginForm } from "@/features/login-user";

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
