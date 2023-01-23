import { socketInstance } from "./base";
import type { GameResult, Player, UserChoice } from "./models";

export const getPlayers = () => {
  socketInstance?.emit("get_players");
};

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


