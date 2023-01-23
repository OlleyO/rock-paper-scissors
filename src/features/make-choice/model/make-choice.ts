import { $status } from "@/entities/player/model";
import { userChoiceModel } from "@/entities/user-choice";
import { $userChoice } from "@/entities/user-choice/model";
import { ioSocket, UserChoice } from "@/shared/api";
import { createEffect, createEvent } from "effector";

const makeChoice = createEvent();

$userChoice.on(makeChoice, (userChoice) => {
  if (userChoice) ioSocket.players.chooseElement(userChoice);
});

export const events = {
  makeChoice,
};
