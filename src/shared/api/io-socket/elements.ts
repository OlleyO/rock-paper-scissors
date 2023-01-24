import { socketInstance } from "./base";
import { UserChoice } from "./models";

type ChooseElementParams = UserChoice;

export const chooseElement = (arg: ChooseElementParams) => {
  socketInstance?.emit("choose", arg);
};
