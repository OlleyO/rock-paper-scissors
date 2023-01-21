import { socketInstance } from "./base";
import type { GameResult, Player, UserChoice } from "./models";

type GetPlayersReturnType = string[];
export type GetPlayersParams = (arg: GetPlayersReturnType) => void;

export const getPlayers = (arg: GetPlayersParams) =>
  socketInstance?.emit("get_players", (players: GetPlayersReturnType) =>
    arg(players)
  );

type OnPlayersReceivedReturnType = string[];
export type OnPlayersReceivedParams = (
  arg: OnPlayersReceivedReturnType
) => void;

export const onPlayersReceived = (arg: OnPlayersReceivedParams) =>
  socketInstance?.on(
    "players_received",
    (payload: OnPlayersReceivedReturnType) => arg(payload)
  );

type OnConnectedReturnType = Player;
export type OnConnectedParams = (arg: OnConnectedReturnType) => void;

export const onConnected = (arg: OnConnectedParams) =>
  socketInstance?.on("connected", (payload: OnConnectedReturnType) =>
    arg(payload)
  );

type OnDisconnectedReturnType = Player;
export type OnDisconnectedParams = (arg: OnDisconnectedReturnType) => void;

export const onDisconnected = (arg: OnDisconnectedParams) => {
  socketInstance?.on("disconnected", (payload: OnDisconnectedReturnType) =>
    arg(payload)
  );
};

export const disconnect = () => socketInstance?.disconnect();

type OnOpponentMadeChoiceReturnType = Player;
export type OnOpponentMadeChoiceParams = (
  arg: OnOpponentMadeChoiceReturnType
) => void;

export const onOpponentMadeChoice = (arg: OnOpponentMadeChoiceParams) => {
  socketInstance?.on(
    "opponent_made_choice",
    (payload: OnOpponentMadeChoiceReturnType) => arg(payload)
  );
};

type OnGameFinishedReturnType = {
  results: GameResult;
};
export type OnGameFinishedParams = (arg: OnGameFinishedReturnType) => void;

export const onGameFinished = (arg: OnGameFinishedParams) => {
  socketInstance?.on("game_finished", (result: OnGameFinishedReturnType) =>
    arg(result)
  );
};

export type ChooseElementParams = UserChoice;

export const chooseElement = (arg: ChooseElementParams) => {
  socketInstance?.emit("choose", arg);
};