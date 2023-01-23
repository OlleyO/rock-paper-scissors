import { socketInstance } from "./base";
import { GameResult } from "./models";

type OnGameFinishedReturnType = {
  results: GameResult;
};
export type OnGameFinishedParams = (arg: OnGameFinishedReturnType) => void;

export const onGameFinished = (arg: OnGameFinishedParams) => {
  socketInstance?.on("game_finished", (result: OnGameFinishedReturnType) =>
    arg(result)
  );
};
