import { combine, createEvent, createStore } from "effector";
import { useStore } from "effector-react";

import { $user } from "@/entities/user/model";
import { ioSocket, Player } from "@/shared/api";

type Status = "choice-made" | "online" | "offline";

export const $player = createStore<Player>({
  username: "",
});
export const $status = createStore<Status>("offline");

export const connected = createEvent<Player>();
export const disconnected = createEvent<Player>();
export const playersReceived = createEvent<string[]>();
export const choiceMade = createEvent<Player>();

$player
  .on(connected, (_, player) => ({ ...player }))
  .on(disconnected, (_, player) => ({ ...player }))
  .on(playersReceived, (_, players) => {
    const user = $user.getState();

    return {
      username: players.find((player) => player !== user.username) ?? "",
    };
  })
  .on(choiceMade, (_, player) => ({ ...player }));

$status
  .on(connected, (_, __) => "online")
  .on(disconnected, (_, __) => "offline")
  .on(playersReceived, (_, players) =>
    players.find((player) => player === $player.getState().username)
      ? "online"
      : "offline"
  )
  .on(choiceMade, (_, __) => "choice-made");

const $playerWithStatus = combine([$player, $status]);

export const subscribeSocketEvents = () => {
  ioSocket.players.onConnected((payload) => connected(payload));
  ioSocket.players.onDisconnected((payload) => disconnected(payload));
  ioSocket.players.onPlayersReceived((payload) => playersReceived(payload));
};

const usePlayer = () => {
  return useStore($playerWithStatus);
};

export const selectors = {
  usePlayer,
};
