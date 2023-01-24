import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";

import { ioSocket, Player, UserChoice } from "@/shared/api";

export const $userChoice = createStore<UserChoice | null>(null);
export const $opponentMadeChoice = createStore<boolean>(false);

const opponentMadeChoice = createEvent<Player>();
const choiceMade = createEvent<UserChoice>();

$opponentMadeChoice.on(opponentMadeChoice, (_, __) => true);

$userChoice.on(choiceMade, (prevChoice, choice) => {
  const opponentHasChosen = $opponentMadeChoice.getState();

  if (!prevChoice) {
    return choice;
  }

  if (opponentHasChosen) {
    return prevChoice;
  } else {
    return choice;
  }
});

export const subscribeSocketEvents = () => {
  ioSocket.players.onOpponentMadeChoice(opponentMadeChoice);
};

const useUserChoice = () => useStore($userChoice);

export const selectors = {
  useUserChoice,
};

export const events = {
  choiceMade,
};
