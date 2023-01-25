import { createEvent } from "effector";

import { $userChoice } from "@/entities/user-choice/model";
import { ioSocket } from "@/shared/api";

const makeChoice = createEvent();

$userChoice.on(makeChoice, (userChoice) => {
  console.log(userChoice);
  if (userChoice) ioSocket.elements.chooseElement(userChoice);
});

export const events = {
  makeChoice,
};
