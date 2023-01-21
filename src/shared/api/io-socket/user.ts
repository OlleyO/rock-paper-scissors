import { initializeSocketConnection, socketInstance } from "./base";
import type { User } from "./models";

export const logIn = (user: User) => initializeSocketConnection(user);
export const logOut = () => socketInstance?.disconnect();
