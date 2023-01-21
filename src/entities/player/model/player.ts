import { createStore, createEvent, combine } from "effector";
import { useStore } from "effector-react";
import { Player } from "@/shared/api";
import { players } from "@/shared/api/io-socket";

type Status = "choice-made" | "online" | "offline" | "in-game";

export const $player = createStore<Player>({
  username: "",
});

export const $status = createStore<Status>("offline");

export const connected = createEvent<Player>();
export const disconnected = createEvent<Player>();
export const playersReceived = createEvent<string[]>();

$player.on(connected, (_, player) => ({ ...player }));
$status.on(connected, (_, __) => "online");
$status.on(disconnected, (_, __) => "offline");
$status.on(playersReceived, (_, __) => "in-game");

const $playerWithStatus = combine([$player, $status]);

export const subscribeSocketEvents = () => {
  players.onConnected((payload) => connected(payload));
  players.onDisconnected((payload) => disconnected(payload));
  players.onPlayersReceived((payload) => playersReceived(payload));
};

const usePlayer = () => {
  return useStore($playerWithStatus);
};

export const selectors = {
  usePlayer,
};
