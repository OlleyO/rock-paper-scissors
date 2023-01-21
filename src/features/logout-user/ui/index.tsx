import Button from "@/widgets/button";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { logoutUserModel } from "..";

import styles from "./styles.module.scss";

const LogoutUser: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
    }
  }, [router]);

  return (
    <Button
      onClick={() =>
        logoutUserModel.effects.logoutUserFx().then(() => router.push("/login"))
      }
      variant="secondary"
    >
      Log Out
    </Button>
  );
};

export default LogoutUser;
