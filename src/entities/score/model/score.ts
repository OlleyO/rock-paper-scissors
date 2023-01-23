import { createEffect, createEvent, createStore, forward } from "effector";
import { useStore } from "effector-react";
import produce from "immer";

import { playerModel } from "@/entities/player";
import { userModel } from "@/entities/user";
import { Game, GameResult } from "@/shared/api";
import { players } from "@/shared/api/io-socket";

export type Score = {
  username: string;
  score: number;
}[];

const initialScore = new Map<string, number>();

initialScore.set(userModel.$user.getState(), 0);
initialScore.set(playerModel.$player.getState().username, 0);

const $score = createStore<Map<string, number>>(initialScore);

$score.watch((state) => console.log(state));

const findWinnerFx = createEffect((result: GameResult) => {
  const [user1, user2] = result;

  return rockPaperScissors(user1, user2);
});

const rockPaperScissors = (player1: Game, player2: Game) => {
  const choice1 = player1.choice;
  const choice2 = player2.choice;

  if (choice1 === choice2) {
    return null;
  }
  if (choice1 === "rock" && choice2 === "scissors") {
    return player1.username;
  } else if (choice1 === "paper" && choice2 === "rock") {
    return player1.username;
  } else if (choice1 === "scissors" && choice2 === "paper") {
    return player1.username;
  } else {
    return player2.username;
  }
};

const addPoint = createEvent<string | null>();

$score.on(addPoint, (state, winner) => {
  if (winner) {
    return produce(state, (draft) => {
      const winnerPoints = draft.get(winner);
      if (winnerPoints) {
        draft.set(winner, winnerPoints + 1);
      }
    });
  } else {
    return state;
  }
});

export const subscribeSocketEvents = () => {
  players.onGameFinished((payload) => findWinnerFx(payload.results));
};

forward({
  from: findWinnerFx.doneData,
  to: addPoint,
});

const useScore = () => useStore($score);

export const selectors = {
  useScore,
};
