import { createEffect } from "effector";

import { playerModel } from "@/entities/player";
import { userModel } from "@/entities/user";
import { ioSocket } from "@/shared/api";

const loginUserFx = createEffect((username: string) => {
  localStorage.setItem("user", username);
  ioSocket.user.logIn(username);
  playerModel.subscribeSocketEvents();

  return username;
});

userModel.$user.on(loginUserFx.doneData, (_, payload) => ({
  username: payload,
}));

export const effects = { loginUserFx };
