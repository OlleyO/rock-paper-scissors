import { createStore, createEvent, combine } from "effector";
import { useStore } from "effector-react";
import { Player } from "@/shared/api";
import { players } from "@/shared/api/io-socket";
import { $user } from "@/entities/user/model";

type Status = "choice-made" | "online" | "offline" | "in-game";

export const $player = createStore<Player>({
  username: "",
});

export const $status = createStore<Status>("offline");

export const connected = createEvent<Player>();
export const disconnected = createEvent<Player>();
export const playersReceived = createEvent<string[]>();

$player.on(connected, (_, player) => ({ ...player }));
$player.on(disconnected, (_, player) => ({ ...player }));
$player.on(playersReceived, (_, players) => {
  const user = $user.getState();

  console.log("user", user);
  console.log("players", players);

  return { username: players.find((player) => player !== user) ?? "" };
});
$status.on(connected, (_, __) => "online");
$status.on(disconnected, (_, __) => "offline");
$status.on(playersReceived, (_, players) =>
  players.find((player) => player === $player.getState().username)
    ? "online"
    : "offline"
);

const $playerWithStatus = combine([$player, $status]);

$playerWithStatus.watch((state, _) => {
  console.log("Opponent", state[0].username);
  console.log("Status", state[1]);
});

export const subscribeSocketEvents = () => {
  players.onConnected((payload) => connected(payload));
  players.onDisconnected((payload) => disconnected(payload));
  players.onPlayersReceived((payload) => playersReceived(payload));
  players.onPlayersReceived((payload) => {
    console.log("players", payload);
  });
};

const usePlayer = () => {
  return useStore($playerWithStatus);
};

export const selectors = {
  usePlayer,
};
