import { playerModel } from "@/entities/player";
import { userModel } from "@/entities/user";
import { selectors } from "@/entities/user/model";
import { loginUserModel } from "@/features/login-user";
import { initializeSocketConnection } from "@/shared/api/io-socket/base";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";

const AuthWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    } else {
      loginUserModel.effects.loginUserFx(user).then(() => router.push("/"));
      initializeSocketConnection(user);
      playerModel.subscribeSocketEvents();
    }
  }, []);

  return <>{children}</>;
};

export default AuthWrapper;