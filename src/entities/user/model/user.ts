import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";

import { User } from "@/shared/api";

export const $user = createStore<User>("");
export const $usernameQuery = createStore<string>("");

export const usernameQueryChanged = createEvent<string>();

$usernameQuery.on(usernameQueryChanged, (_, payload) => payload);

$user.watch((state, _) => console.log("User", state));

const useUser = (): User => useStore($user);
const useUsernameQuery = (): string => useStore($usernameQuery);

export const selectors = {
  useUser,
  useUsernameQuery,
};
