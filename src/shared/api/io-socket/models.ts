export type Player = {
  username: string;
};

export type UserChoice = "rock" | "paper" | "scissors";

export type Game = {
  username: string;
  choice: UserChoice;
};

export type GameResult = Game[];

export type User = string;
