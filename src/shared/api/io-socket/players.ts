import { socketInstance } from "./base";
import type { Player } from "./models";

export const getPlayers = () => {
  socketInstance?.emit("get_players");
};

type OnPlayersReceivedReturnType = string[];
type OnPlayersReceivedParams = (arg: OnPlayersReceivedReturnType) => void;

export const onPlayersReceived = (arg: OnPlayersReceivedParams) =>
  socketInstance?.on(
    "players_received",
    (payload: OnPlayersReceivedReturnType) => arg(payload)
  );
type OnConnectedReturnType = Player;
type OnConnectedParams = (arg: OnConnectedReturnType) => void;

export const onConnected = (arg: OnConnectedParams) =>
  socketInstance?.on("connected", (payload: OnConnectedReturnType) =>
    arg(payload)
  );

type OnDisconnectedReturnType = Player;
type OnDisconnectedParams = (arg: OnDisconnectedReturnType) => void;

export const onDisconnected = (arg: OnDisconnectedParams) => {
  socketInstance?.on("disconnected", (payload: OnDisconnectedReturnType) =>
    arg(payload)
  );
};

type OnOpponentMadeChoiceReturnType = Player;
type OnOpponentMadeChoiceParams = (arg: OnOpponentMadeChoiceReturnType) => void;

export const onOpponentMadeChoice = (arg: OnOpponentMadeChoiceParams) => {
  socketInstance?.on(
    "opponent_made_choice",
    (payload: OnOpponentMadeChoiceReturnType) => arg(payload)
  );
};
