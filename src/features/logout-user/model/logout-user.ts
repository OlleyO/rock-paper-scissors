import { createEffect } from "effector";

import { userModel } from "@/entities/user";
import { ioSocket } from "@/shared/api";

const logoutUserFx = createEffect(() => {
  localStorage.clear();
  ioSocket.user.logOut();

  return "";
});

userModel.$user.on(logoutUserFx.doneData, (_, payload) => ({
  username: payload,
}));

export const effects = { logoutUserFx };
