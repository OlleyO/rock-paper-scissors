import { createEffect } from "effector";
import { userModel } from "@/entities/user";

import { logIn } from "@/shared/api/io-socket/user";
import { playerModel } from "@/entities/player";

const loginUserFx = createEffect((username: string) => {
  localStorage.setItem("user", username);
  logIn(username);
  playerModel.subscribeSocketEvents();

  return username;
});

userModel.$user.on(loginUserFx.doneData, (_, payload) => payload);

export const effects = { loginUserFx };
