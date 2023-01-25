import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";

import { ioSocket, Player, UserChoice } from "@/shared/api";

export const $userChoice = createStore<UserChoice | null>(null);
export const $opponentMadeChoice = createStore<boolean>(false);

const opponentMadeChoice = createEvent<Player>();
const choiceMade = createEvent<UserChoice>();
const resetChoice = createEvent();

$opponentMadeChoice
  .on(opponentMadeChoice, (_, __) => true)
  .on(resetChoice, (_) => false);

$userChoice
  .on(choiceMade, (prevChoice, choice) => {
    const opponentHasChosen = $opponentMadeChoice.getState();

    if (!prevChoice) {
      return choice;
    }

    if (opponentHasChosen) {
      return prevChoice;
    } else {
      return choice;
    }
  })
  .on(resetChoice, (_) => null);

export const subscribeSocketEvents = () => {
  ioSocket.players.onOpponentMadeChoice((payload) =>
    opponentMadeChoice(payload)
  );
  ioSocket.games.onGameFinished((_) => resetChoice());
};

const useUserChoice = () => useStore($userChoice);

export const selectors = {
  useUserChoice,
};

export const events = {
  choiceMade,
};
