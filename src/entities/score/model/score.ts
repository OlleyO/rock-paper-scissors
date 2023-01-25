import { combine, createEffect, createEvent, forward } from "effector";
import { useStore } from "effector-react";
import produce from "immer";

import { $player } from "@/entities/player/model";
import { $user } from "@/entities/user/model";
import { Game, GameResult, ioSocket } from "@/shared/api";

const $score = combine(
  {
    user: $user,
    player: $player,
  },
  ({ user, player }) => ({
    [user.username]: 0,
    [player.username]: 0,
  })
);

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
      draft[winner] += 1;
    });
  } else {
    return state;
  }
});

forward({
  from: findWinnerFx.doneData,
  to: addPoint,
});

export const subscribeSocketEvents = () => {
  ioSocket.games.onGameFinished((payload) => {
    findWinnerFx(payload.results);
  });
};

const $scoreView = $score.map((state) => {
  const tmp = [];

  for (const key in state) {
    tmp.push({
      username: key,
      score: state[key],
    });
  }

  return tmp;
});

const useScore = () => useStore($scoreView);

export const selectors = {
  useScore,
};
