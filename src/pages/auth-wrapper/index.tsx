import { playerModel } from "@/entities/player";
import { scoreModel } from "@/entities/score";
import { userModel } from "@/entities/user";
import { userChoiceModel } from "@/entities/user-choice";
import { selectors } from "@/entities/user/model";
import { loginUserModel } from "@/features/login-user";
import { ioSocket } from "@/shared/api";
import { initializeSocketConnection } from "@/shared/api/io-socket/base";
import { getPlayers } from "@/shared/api/io-socket/players";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";

const AuthWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    } else {
      loginUserModel.effects.loginUserFx(user).then(() => {
        playerModel.subscribeSocketEvents();
        userChoiceModel.subscribeSocketEvents();
        scoreModel.subscribeSocketEvents();
        router.push("/");
      });

      getPlayers();
    }
  }, []);

  return <>{children}</>;
};

export default AuthWrapper;
