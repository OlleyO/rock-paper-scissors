import { createEffect } from "effector";
import { userModel } from "@/entities/user";
import { disconnect } from "@/shared/api/io-socket/players";
import { logOut } from "@/shared/api/io-socket/user";

const logoutUserFx = createEffect(() => {
  localStorage.clear();
  logOut();

  return "";
});

userModel.$user.on(logoutUserFx.doneData, (_, payload) => payload);

export const effects = { logoutUserFx };
