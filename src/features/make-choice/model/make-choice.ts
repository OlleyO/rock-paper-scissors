import { createEffect, createEvent } from "effector";

import { $userChoice } from "@/entities/user-choice/model";
import { ioSocket } from "@/shared/api";

const makeChoice = createEvent();

$userChoice.on(makeChoice, (userChoice) => {
  if (userChoice) ioSocket.elements.chooseElement(userChoice);
});

export const events = {
  makeChoice,
};
