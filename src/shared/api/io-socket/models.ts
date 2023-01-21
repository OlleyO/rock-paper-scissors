export type Player = {
  username: string;
};

export type UserChoice = "rock" | "paper" | "scissors";

export type GameResult = {
  username: string;
  choice: UserChoice;
}[];

export type User = string;
