import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";

import { playerModel } from "@/entities/player";
import { scoreModel } from "@/entities/score";
import { userModel } from "@/entities/user";
import { selectors } from "@/entities/user/model";
import { userChoiceModel } from "@/entities/user-choice";
import { loginUserModel } from "@/features/login-user";
import { ioSocket } from "@/shared/api";
import { initializeSocketConnection } from "@/shared/api/io-socket/base";
import { getPlayers } from "@/shared/api/io-socket/players";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default AuthWrapper;
