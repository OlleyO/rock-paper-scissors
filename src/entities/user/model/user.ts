import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";

import { Player } from "@/shared/api";

export const $user = createStore<Player>({
  username: "",
});

export const $usernameQuery = createStore<string>("");

export const usernameQueryChanged = createEvent<string>();

$usernameQuery.on(usernameQueryChanged, (_, payload) => payload);

const useUser = (): Player => useStore($user);
const useUsernameQuery = (): string => useStore($usernameQuery);

export const selectors = {
  useUser,
  useUsernameQuery,
};
